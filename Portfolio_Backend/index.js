const express = require("express")
const port = process.env.PORT||4000;

const {Connect_MongoDB} = require("./Conection")
const router = require("./Routes/routes")
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();

app.use(cors(
  {
    origin:["https://portfoliofrontend-azure.vercel.app"],
    methods:["POST","GET"],
    credentials:true,
  }
));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

Connect_MongoDB("mongodb+srv://shafique63005:pass%40portfolio@cluster1.ez7pc.mongodb.net/");

app.use(router);



app.listen(port,()=>{console.log(`server started successfully on port ${port}`)});
