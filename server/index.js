require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth');
const noteRouter = require('./routes/note');
const userRouter = require('./routes/user');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "welcome to Amossra"
    })
})

const corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(console.log('Connected to mongoDB'))
    .catch(err => {
        console.log(err);
    })

app.use('/api/auth', authRouter);
app.use('/api/note', noteRouter);
app.use('/api/user', userRouter);

app.listen(5000, () => {
    console.log(`Server running on port: 5000`);
});