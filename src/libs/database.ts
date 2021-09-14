import { DB } from '../config';
import mongoose, { ConnectOptions } from 'mongoose';

const { host, database } = DB;

const dbOptions: ConnectOptions = {};

mongoose.connect(`mongodb://${host}/${database}`, dbOptions)
.then(async (db) => {
  console.log(`DB is conected to ${db.connection.host}`);
})
.catch((err) => {
  console.log('Connection error', err);
})
