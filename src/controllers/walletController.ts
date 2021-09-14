import { Request, Response } from 'express';

export const balance = (req: Request, res: Response): Response => {
  return res.status(501).json({
    message: 'No implemented'
  });
}

export const notifications = (req: Request, res: Response): Response => {
  return res.status(501).json({
    message: 'No implemented'
  });
}

export const history = (req: Request, res: Response): Response => {
  return res.status(501).json({
    message: 'No implemented'
  });
}

export const generateMnemonic = (req: Request, res: Response): Response => {
  return res.status(501).json({
    message: 'No implemented'
  });
}