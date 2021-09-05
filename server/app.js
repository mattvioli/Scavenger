import express from 'express';
import sequelize from './utils/database.js';
import router from './routes/routes.js';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, X-Requested-With, Accept"');
    next();
});

app.use(router);

sequelize.sync(); 

app.listen(5000);