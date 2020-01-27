const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({
    defaiultlayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

const port = 3000;

app.get('/',(req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Serever is runniong on port ${port}`);
});