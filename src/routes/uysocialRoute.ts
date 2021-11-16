import path from 'path';
import multer from 'multer';
import { v4 as uuidV4 } from 'uuid';
import { Router, Request, Response, NextFunction } from 'express';

import { UPLOADS_PATH } from '../constants';
import { createPost } from '../controllers/uysocialController';

const storage = multer.diskStorage({
  destination: UPLOADS_PATH,
  filename: (req, file, cb) => {
    const uniqueSuffix = uuidV4();
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, uniqueSuffix + ext);
  },
})

const uploads = multer({
  storage,
  dest: UPLOADS_PATH,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpg|jpeg|png|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));

    if(mimetype && extname) {
      return cb(null, true);
    }

    cb(new Error('The file is not a valid image'));
  }
}).single('pic');

const errorHandlingMulter = (req: Request, res: Response, next: NextFunction) => {
  uploads(req, res, (error: any) => {
    if (error) {
      return res.status(422).json({
        status: false,
        message: error.message
      });
    }
    next();
  })
}

export default (router: Router): Router => {
  const prefix = (URI: string) => `/uysocial/${URI}`;

  router.post(prefix('create-post'), errorHandlingMulter, createPost);

  return router;
};

