import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();


const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI; // must match .env exactly

// connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ Error connecting to MongoDB:", err));


// defining routes
app.use("/book", bookRoute); 
app.use("/user", userRoute);



app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});
