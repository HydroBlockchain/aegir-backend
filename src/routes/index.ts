import { Router, Express } from 'express';

// Routes
import userRoutes from './userRoute';
import authRoutes from './authRoutes';
import walletRoute from './walletRoute';

export default (app: Express) => {
  const router = Router();
  
  return app.use('/api/v1.0',
    authRoutes(router),
    userRoutes(router),
    walletRoute(router),
  );
}