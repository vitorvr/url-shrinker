const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const ShortUrlRoutes = require('./routes/ShortUrlRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1', ShortUrlRoutes);
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();

const port = process.env.PORT || 3000;
const mongodbConnectionOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URL, mongodbConnectionOpts);
mongoose.connection.on('connected', () => {
  console.log('Connected to Database');
});
mongoose.connection.on('error', (err) => {
  console.log(`Error to connecto to Database: ${err}`);
});

app.get('/', (req, res) => {
  res.send({ status: 'OK' });
});

app.listen(port, () => console.log(`Server is running at port: ${port}`));
