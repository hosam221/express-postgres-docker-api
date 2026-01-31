import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import createUserTable from './data/createUserTable.js';
import router from './routes/userRoutes.js';



dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api',router);

// Root Route
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT current_database()');
    res.send(`The Database connected is: ${result.rows[0].current_database}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Error Handling Middleware
app.use(errorHandler);

//Create Tables Before Server Start
createUserTable();

// Server
app.listen(port, () => {
    
  console.log(`Server is running on http://localhost:${port}`);
});
