const express = require("express")
const port = process.env.PORT||4000;

const {Connect_MongoDB} = require("./Conection")
const router = require("./Routes/routes")
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();

app.use(cors(
  {
    origin:["https://portfoliofrontend-azure.vercel.app",
   
    ],
    methods: ["POST", "GET", "OPTIONS"],
    credentials:true,
  }
));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



Connect_MongoDB("mongodb+srv://shafique63005:pass%40portfolio@cluster1.ez7pc.mongodb.net/");

app.use(router);



app.listen(port,()=>{console.log(`server started successfully on port ${port}`)});
