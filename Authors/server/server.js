import dotenv from 'dotenv';
import express from 'express';
import "./config/mongoose.config.js";
import authorRoutes from "./routes/author.routes.js";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
authorRoutes(app);

// Start the server
app.listen(port, () => console.log(`Server is running on port: ${port}`));