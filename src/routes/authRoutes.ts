import { Router } from 'express';
import { signIn, signUp } from '../controllers/AuthController';

export default (router: Router): Router => {
  router.post('/signup', signUp);
  router.post('/signin', signIn);

  return router;
};