import cors from "cors";
// import './libs/database';
import helmet from "helmet";
import morgan from "morgan";
import dotenv from 'dotenv';
import routes from "./routes";
import passport from 'passport';
import express, { Request, Response } from 'express';
import passportMiddleware from './middlewares/passport';

// initializations
dotenv.config();
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
routes(app);

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    error: '404 - requested resource not found'
  })
})

export default app;