const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use('/api/users',userRoutes);