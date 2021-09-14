export const jwtSecret = process.env.JWT_SECRET || 'jwtSecret';

export const DB = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
}