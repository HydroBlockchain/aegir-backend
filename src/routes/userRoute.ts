import { Router } from 'express';
import { TokenCheck } from '../middlewares/passport';
import { profile } from '../controllers/UserController';

export default (router: Router): Router => {
  const prefix = (URI: string) => `/user/${URI}`;
  
  router.get(prefix('profile'), TokenCheck, profile);
  

  return router;
};

