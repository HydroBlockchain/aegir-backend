import { Router } from 'express';
import { TokenCheck } from '../middlewares/passport';
import { balance, generateMnemonic, history, notifications } from '../controllers/walletController';

export default (router: Router): Router => {
  const prefix = (URI: string) => `/wallet/${URI}`;
  
  router.get(prefix('balance'), TokenCheck, balance);
  router.get(prefix('history'), TokenCheck, history);
  router.get(prefix('generateMnemonic'), generateMnemonic);
  router.get(prefix('notifications'), TokenCheck, notifications);

  return router;
};

