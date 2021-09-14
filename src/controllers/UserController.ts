import { Request, Response } from 'express';

export const profile = (req: Request, res: Response): Response => {
  return res.status(501).json({
    message: 'No implemented'
  });
}

export const contact = (req: Request, res: Response): Response => {
  return res.status(501).json({
    message: 'No implemented'
  });
}