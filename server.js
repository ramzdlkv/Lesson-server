const http = require("http")// подключаем модуль http
const express = require("express")// подключаем библиотеку express

const app = express()// запускаем express
const PORT = 3000;// порт на котором будем запускать сервер


app.get('/' , (req , res) =>{
    res.send("Главная страница")
})

app.get('/About' , (req , res) =>{
    res.send("О нас")
})

app.get('/Contacts' , (req , res) =>{
    res.send("Контакты")
})

app.get('/Product/:id' , (req , res) =>{
    console.log(req.params.id);
    res.send(`Продукт id: ${req.params.id}`)
    
    
})

app.get('/Number/:id' , (req , res) =>{
    res.send(`Ваш номер телефона: ${req.params.id}`)
})


app.post('/addproduct' , (req , res)=>{
    const { name , age } = req.body;
})



app.listen(PORT , ()=>{ // тут расписываем на каком порту будет запускаться сервер
    console.log("127.0.0.1:3000");
    
})


