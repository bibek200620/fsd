const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    partialsDir: path.join(__dirname, 'view', 'partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    res.render('pages/home', {
        layout:false,
        title: 'Welcome',
        message: 'Thanks for visiting our store.',
    });
});

app.get('/item', (req, res) => {
    const items = ['laptop', 'phone', 'tablet'];

    res.render('pages/item', {
        layout:false,
        title: 'Items',
        items: items
    });
});

app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'laptop', price: 1000 },
        { id: 2, name: 'phone', price: 500 },
        { id: 3, name: 'tablet', price: 300 }
    ];

    res.render('pages/products', {
        layout:false,
        title: 'Products',
        products: products
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
