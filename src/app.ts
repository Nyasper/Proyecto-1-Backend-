require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import cors from 'cors';
import 'reflect-metadata';
require('dotenv').config();
import ConnectPostgreSql from './db/connection';

//start DB connection
ConnectPostgreSql();

export const app = express();

//morgan logger
app.use(morgan('tiny'));

//CORS
app.use(
	cors({
		origin: true,
		credentials: true,
		maxAge: 6000000,
	})
);

//Express Configs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router config
app.use(routes);

app.get('/', (req, res) => {
	res.send('Proyecto 1 Backend');
});
