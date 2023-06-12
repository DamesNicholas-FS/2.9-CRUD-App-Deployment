if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const databaseConnection = require('./config/connectToDB');
//const NewTicket = require('./models/ticket');
const controller = require('./controllers/controller');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

databaseConnection();

app.get('/', controller.find);
app.get('/:id', controller.findById)
app.post('/new', controller.create);
app.patch('/:id' , controller.findByIdAndUpdate);
app.delete('/:id' , controller.findByIdAndDelete);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port {process.env.PORT}`);
});