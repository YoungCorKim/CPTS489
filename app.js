const express = require('express');
const path = require('path');
const app = express();
const Users = require('./User');
const Students = require('./Student');
const Professors = require('./Professor');

// Make it So it Can Read Response Data
app.use(express.urlencoded({ extended: true }));

// Use Style In App
app.use(express.static(__dirname + '/public'));

// Gets the Thing to Look in The Views Folder/Can Render .ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Listens on Port 3000
app.listen(3000, function() {});

// The First One is the Non-Logged in Main Page
app.get('/', async function (req, res){
    // Find a Way to Filter for Notifications

    const allUsers = await Users.findAll();
    // Render the Main Page
    res.render('mainPageLogin', { users: allUsers });

    // Check for Login? 
});

app.get('/home', async function (req, res){
    // Find a Way to Filter for Notifications

    const allUsers = await Users.findAll();
    // Render the Main Page
    res.render('mainPage', { users: allUsers });

    // Check for Login? 
});

app.get('/login', async function (req, res){
    // Render the Selected Page
    res.render('loginPage', {error: false});
});

app.get('/login/error', async function (req, res){
    // Render the Selected Page
    res.render('loginPage', { error: true });
});

app.get('/register', async function (req, res){
    const allUsers = await Users.findAll();
    // Render the Selected Page
    res.render('registerPage', { users: allUsers });
});

app.get('/calendar', async function (req, res){
    // Render the Selected Page
    res.render('calendarPage');
});

app.get('/class/create', async function (req, res){
    // Render the Selected Page
    res.render('classCreatepage');
});

app.get('/class/manage', async function (req, res){
    // Render the Selected Page
    res.render('classManagePage');
});

app.get('/event/create', async function (req, res){
    // Render the Selected Page
    res.render('eventCreatePage');
});

app.get('/event/manage', async function (req, res){
    // Render the Selected Page
    res.render('eventManagePage');
});

app.get('/import', async function (req, res){
    // Render the Selected Page
    res.render('importPage');
});

app.get('/groups', async function (req, res){
    // Render the Selected Page
    res.render('groupPage');
});

app.get('/finduser', async function (req, res){
    const allUsers = await Users.findAll();

    // const filteredUsers = allUsers.filter(user => userNameCheck("Mar"));

    // Render the Selected Page
    res.render('findUserPage', { users: allUsers });
});

app.get('/settings', async function (req, res){
    // Render the Selected Page
    res.render('settingsPage');
});

app.get('/logout', async function (req, res){
    // Render the Main Page
    res.render('/');
});

// Re-Renders the Page When Needed

app.post('/logincheck', async (req, res) => {
    const user = await Users.findAccount(req.body.username, req.body.password);
    if(user != null){
        res.redirect('/home');
    }
    else{
        res.render('/login/error');
    }
});

app.post('/find', async (req, res) => {
    const { name, type } = req.body;
    await Users.create({ name, type });

    res.redirect('/finduser');
});