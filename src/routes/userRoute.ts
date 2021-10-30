import { Router } from 'express';
import { TokenCheck } from '../middlewares/passport';

import {
  profile,
  setContacts,
  setCollectibles,
} from '../controllers/UserController';

import { contactRules } from '../middlewares/validations/ContactRequest';
import { collectibleRules } from '../middlewares/validations/CollectibleRequest';

export default (router: Router): Router => {
  const prefix = (URI: string) => `/user/${URI}`;
  
  router.get(prefix('profile'), TokenCheck, profile);
  router.post(prefix('contacts'), contactRules, setContacts);
  router.post(prefix('collectibles'), collectibleRules, setCollectibles);

  return router;
};
