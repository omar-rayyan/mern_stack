import dotenv from 'dotenv';
import express from 'express';
import "./config/mongoose.config.js";
import userRoutes from "./routes/joke.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
userRoutes(app);

// Start the server
app.listen(port, () => console.log(`Server is running on port: ${port}`));