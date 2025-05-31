require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log('API rodando na porta ' + process.env.PORT)))
  .catch(err => console.error(err));
