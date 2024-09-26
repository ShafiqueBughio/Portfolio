const express = require("express")
const port = process.env.PORT||4000;

const {Connect_MongoDB} = require("./Conection")
const router = require("./Routes/routes")
const cors = require("cors");



const app = express();

// app.use(cors(
//   {
//     origin:["https://portfoliofrontend-azure.vercel.app",
   
//     ],
//     methods: ["POST", "GET"],
//     credentials:true,
//   }
// ));


app.use(cors({
    origin: ['https://portfoliofrontend-azure.vercel.app'], // Local and production origins
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true // Enable credentials (cookies, authorization headers, etc.)
  }));

// app.use(cors());

app.use(express.json())

app.use(express.static('public'));

const dbConnectionString = process.env.MONGODB_URI || "mongodb+srv://shafique63005:pass%40portfolio@cluster1.ez7pc.mongodb.net/";
Connect_MongoDB(dbConnectionString);



app.use(router);



app.listen(port,()=>{console.log(`server started successfully on port ${port}`)});
