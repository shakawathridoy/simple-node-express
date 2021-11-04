const express = require('express')
const cors = require('cors');
const { json } = require('express');
const app = express();
const port = 5000;


app.use(cors())
app.use(express.json())

app.get('/' , (req, res) => {
    res.send('This is node for you')
});


const users = [
    {id: 1, name: 'shakawat hridoy', age:5, phone: '01883559190', email: 'hridoy@gmail.com'}, 
    {id: 2, name: 'sabana khan', age:5, phone: '01883559190', email: 'hridoy@gmail.com'},
    {id: 3, name: 'alamgir', age:5, phone: '01883559190', email: 'hridoy@gmail.com'},
    {id: 4, name: 'jashim', age:5, phone: '01883559190', email: 'hridoy@gmail.com'},
    {id:5, name: 'jashim', age:6, phone: '01883559190', email: 'hridoy@gmail.com'},

]

app.get('/users', (req, res) => {
    
    const search = req.query.search; 
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
        res.send(users)
    
} );


// app.method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hiting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


app.get('/fruits' , (req, res) => {
    res.send(['mango', 'oranges', 'Banana', 'pineapple'])
})


// dyhnamic API 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy Yummy foods from foodbazar');
})

app.listen(port, () => {
    console.log('Listening to port' , port);
})
