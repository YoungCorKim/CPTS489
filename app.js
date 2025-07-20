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

app.get('/', async function (req, res){
    // Find a Way to Filter for Notifications

    const allUsers = await Users.findAll();
    // Render the Main Page
    res.render('mainPage', { Users: allUsers });

    // Check for Login? 
});

app.get('/calendar', async function (req, res){
    // Render the Selected Page
    res.render('calendarPage');
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
    // Render the Selected Page
    res.render('findUserPage', { Users: allUsers });
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

app.post('/logout', async (req, res) => {

    // Log out User!!


    // Send it to the Desired Page Upon Click
    res.redirect('/');
});