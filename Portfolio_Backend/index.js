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


const allowedOrigins = [
  'https://portfoliofrontend-azure.vercel.app',
  'https://portfolio-frontend-react.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:4000',
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    // allow all vercel.app subdomains
    if (allowedOrigins.includes(origin) || /\.vercel\.app$/.test(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS not allowed: ' + origin), false);
  },
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Handle preflight for all routes
app.options('*', cors());

app.use(express.json())

app.use(express.static('public'));

const dbConnectionString = process.env.MONGODB_URI || process.env.MONGODB_DIRECT || "mongodb+srv://shafique63005:pass%40portfolio@cluster1.ez7pc.mongodb.net/?appName=Cluster1";
Connect_MongoDB(dbConnectionString).catch(() => {
  // SRV blocked on local network — fallback to direct connection
  const directUri = process.env.MONGODB_DIRECT || "mongodb://shafique63005:pass%40portfolio@cluster1-shard-00-00.ez7pc.mongodb.net:27017,cluster1-shard-00-01.ez7pc.mongodb.net:27017,cluster1-shard-00-02.ez7pc.mongodb.net:27017/?ssl=true&replicaSet=atlas-1ypwul-shard-0&authSource=admin&retryWrites=true&w=majority";
  console.log("SRV failed, trying direct connection...");
  Connect_MongoDB(directUri);
});



app.use(router);



app.listen(port,()=>{console.log(`server started successfully on port ${port}`)});
