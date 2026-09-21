const http = require("http")// подключаем модуль http
const express = require("express")// подключаем библиотеку express

const app = express()// запускаем express
const PORT = 3000;// порт на котором будем запускать сервер


app.get('/' , (req , res) =>{
    res.send("Главная страница")
})

app.get('/car' , (req , res) =>{
    res.send("вторая страница")
})
// const server = http.createServer((req, res) => { // создаем сервер 
// res.end("Hello world") // ответ клиенту когда он зайдет на сервер

// })

app.listen(PORT , ()=>{ // тут расписываем на каком порту будет запускаться сервер
    console.log("127.0.0.1:3000");
    
})


