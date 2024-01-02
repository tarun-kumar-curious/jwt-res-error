const express = require("express");
const loginRoute = require("./routes/loginRoute");
const connectDB = require("./database/db");
const cookieParser = require("cookie-parser");
const app = express();

// ADD THIS
var cors = require("cors");
// app.use(cors({
//   credentials: true,
//   origin: "http://localhost:3000",
// }));

app.use(function(req, res, next) {
  credentials= true;
  origin= "http://localhost:3000";
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", loginRoute);
connectDB(); //! database

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
