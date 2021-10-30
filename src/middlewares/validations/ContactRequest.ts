import { ethers } from 'ethers';
import { Request, Response } from 'express';

/* Validate that the data provided by the useris valid to process the request */
export function contactRules(req: Request, res: Response, next: () => void) {
  const resErr = res.status(422);
  const { address, contactBook } = req.body;

  try {
    if(!ethers.utils.isAddress(address)) return resErr.json({
      status: false,
      message: 'Your address is not valid'
    });

    if(!contactBook) return resErr.json({
      status: false,
      message: 'You must provide the contact details'
    });

  } catch(error) {
    return resErr.json({
      status: false,
      message: 'An unexpected error occurred. Please try again later'
    });
  }

  next();
}