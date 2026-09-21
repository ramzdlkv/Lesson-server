const http = require("http")// подключаем модуль http

const PORT = 3000;// порт на котором будем запускать сервер

const server = http.createServer((req, res) => { // создаем сервер 
res.end("Hello world") // ответ клиенту когда он зайдет на сервер

})

server.listen(PORT , ()=>{ // тут расписываем на каком порту будет запускаться сервер
    console.log("127.0.0.1:3000");
    
})

console.log("dsdjsdsdqewrq");
