const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries')
const app = express();
const port = 3031;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API'})
});

app.get('/contacts', db.getContacts)
app.get('/contacts/:id', db.getContactById)
app.post('/contacts', db.createContact)
app.put('/contacts/:id', db.updateContact)
app.delete('/contacts/:id', db.deleteContact)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});