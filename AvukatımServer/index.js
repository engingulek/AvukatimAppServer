const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors")
const lawyerInfoRouter = require("./routers/lawyerInfo")
const lawyerCommentRouter = require("./routers/lawyerComents")
const cityRouter = require("./routers/city")
const professionRouter = require("./routers/profession")
const favLawyerInfo = require("./routers/favLawyer")
const meetingRouter = require("./routers/meeting")
app.use(bodyParser.json());
app.use(cors()); // Kim bu ip bağlanırsa bağlansın hiç bir hata çıkmayacak


mongoose.connect('mongodb+srv://engingulek:RnseTPA23TLfHgVG@nodeblog.eyqop.mongodb.net/avukatımDatabase?retryWrites=true&w=majority')


mongoose.connection.once("open",()=>{
    console.log("Connect to DB!")

}).on("error",(error)=>{
    console.log("Failed to connect" + error)
})


app.use("/",lawyerInfoRouter)
app.use("/",lawyerCommentRouter)
app.use("/",cityRouter)
app.use("/",professionRouter)
app.use("/",favLawyerInfo)
app.use("/",meetingRouter)


// serverın bir portu dinlemi için çalıştırıyoruz
app.listen(3000,()=> { // server fonksiyonu dinlenmeye başladığında bu callback fonksiyonu çalıştırlacak
    console.log("Server is running on port 8080")
    })