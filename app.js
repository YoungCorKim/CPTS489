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

    // Render the Main Page
    res.render('mainPage', { Users: allUsers });

    // Check for Login? 
    // const allResponses = await Responses.findAll();
    // res.render('Survey', { responses: allResponses });
});



// Re-Renders the Page when Submit is Pressed
app.post('/submit', async (req, res) => {
    // const { name, major, paradigm, FPlang } = req.body;
    // await Responses.create({ name, major, paradigm, FPlang });

    // Send it Back to The Main Page After Creating Response
    res.redirect('/');
});