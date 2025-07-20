const express = require('express');
const path = require('path');
const app = express();
const Users = require('./User');
const Students = require('./Student');
const Professors = require('./Professor');

// Make it So it Can Read Response Data
app.use(express.urlencoded({ extended: true }));

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

// Re-Renders the Page when Sidebar is Pressed

app.post('/home', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/');
});
app.post('/calendar', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/calendar');
});
app.post('/createclass', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/class/create');
});
app.post('/manageclass', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/class/manage');
});
app.post('/createevent', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/event/create');
});
app.post('/manageevent', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/event/manage');
});
app.post('/import', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/import');
});
app.post('/groups', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/groups');
});
app.post('/finduser', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/finduser');
});
app.post('/settings', async (req, res) => {
    // Send it to the Desired Page Upon Click
    res.redirect('/settings');
});
app.post('/logout', async (req, res) => {

    // Log out User!!


    // Send it to the Desired Page Upon Click
    res.redirect('/');
});