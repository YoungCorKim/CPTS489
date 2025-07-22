const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const readline = require('readline');

const app = express();

// Model imports
const Users = require('./User');
const Students = require('./Student');
const Professors = require('./Professor');
const Schedule = require('./Schedule');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Multer config for uploading files to /uploads
const upload = multer({ dest: 'uploads/' });

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Routes

// Main login page
app.get('/', async (req, res) => {
    const allUsers = await Users.findAll();
    res.render('mainPageLogin', { users: allUsers });
});

// After login home
app.get('/home', async (req, res) => {
    const allUsers = await Users.findAll();
    res.render('mainPage', { users: allUsers });
});

// Login page
app.get('/login', (req, res) => res.render('loginPage', { error: false }));

// Login error
app.get('/login/error', (req, res) => res.render('loginPage', { error: true }));

// Register page
app.get('/register', async (req, res) => {
    const allUsers = await Users.findAll();
    res.render('registerPage', { users: allUsers, message: null, success: null });
});

// Register POST
app.post('/register', async (req, res) => {
    const { name, username, password } = req.body;
    try {
        const existingUser = await Users.findOne({ where: { username } });

        if (existingUser) {
            return res.render('registerPage', {
                users: await Users.findAll(),
                message: 'Username already exists.',
                success: false
            });
        }

        await Users.create({ name, username, password, type: 'Student' });
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Login check
app.post('/logincheck', async (req, res) => {
    const user = await Users.findAccount(req.body.username, req.body.password);
    if (user != null) {
        res.redirect('/home');
    } else {
        res.redirect('/login/error');
    }
});

// Pages
app.get('/calendar', (req, res) => res.render('calendarPage'));

app.get('/calendar/view', async (req, res) => {
    try {
        const schedules = await Schedule.findAll();
        res.render('calendarPage', { schedules });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to load calendar');
    }
});

app.get('/class/create', (req, res) => res.render('classCreatepage'));
app.get('/class/manage', (req, res) => res.render('classManagePage'));
app.get('/event/create', (req, res) => res.render('eventCreatePage'));
app.get('/event/manage', (req, res) => res.render('eventManagePage'));
app.get('/groups', (req, res) => res.render('groupPage'));
app.get('/finduser', async (req, res) => {
    const allUsers = await Users.findAll();
    res.render('findUserPage', { users: allUsers });
});
app.get('/settings', (req, res) => res.render('settingsPage'));
app.get('/logout', (req, res) => res.redirect('/'));

// Create user from FindUser page
app.post('/find', async (req, res) => {
    const { name, type } = req.body;
    await Users.create({ name, type });
    res.redirect('/finduser');
});

// Schedule import form
app.get('/import', (req, res) => res.render('importPage'));

// Handle file upload and import
app.post('/import', upload.single('scheduleFile'), async (req, res) => {
    try {
        const fileStream = fs.createReadStream(req.file.path);
        const rl = readline.createInterface({ input: fileStream });

        const scheduleEntries = [];

        for await (const line of rl) {
            const [userId, title, startTime, endTime] = line.split(',');

            if (userId === 'userId') continue; // Skip header
            if (!userId || !title || !startTime || !endTime) continue;

            scheduleEntries.push({
                userId: parseInt(userId),
                title: title.trim(),
                startTime: new Date(startTime.trim()),
                endTime: new Date(endTime.trim())
            });
        }

        if (scheduleEntries.length === 0) {
            return res.status(400).send('No valid schedule entries found. Please check your file format.');
        }

        await Schedule.bulkCreate(scheduleEntries);
        res.redirect('/calendar/view');
    } catch (err) {
        console.error(err);
        res.status(400).send('Invalid file format or import failed.');
    }
});



