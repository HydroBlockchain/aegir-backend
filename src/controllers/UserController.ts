import { Request, Response } from 'express';
import { makeFileObject, storeFiles } from '../libs/web3Storage';

export const profile = (req: Request, res: Response): Response => {
  return res.status(501).json({
    message: 'No implemented'
  });
}


export const setContacts = async (req: Request, res: Response): Promise<Response> => {
  const { address, contactBook } = req.body;

  try {
    const filename = `${address}_contacts.json`;

    const dataToStore = makeFileObject({
      filename,
      obj: { data: contactBook },
      options: { type: 'application/json' }
    });

    const newCID = await storeFiles([dataToStore]);

    return res.status(200).json({
      status: true,
      message: 'Success!',
      data: { cid: newCID, filename },
    });

  } catch(error) {
    console.log(error);
    return res.status(422).json({
      status: false,
      message: 'An unexpected error occurred. Please try again later'
    });
  }
}

export const setCollectibles = async (req: Request, res: Response): Promise<Response> => {
  const { address, collectibles } = req.body;

  try {
    const filename = `${address}_collectibles.json`;

    const dataToStore = makeFileObject({
      filename,
      obj: { data: collectibles },
      options: { type: 'application/json' }
    });

    const newCID = await storeFiles([dataToStore]);

    return res.status(200).json({
      status: true,
      message: 'Success!',
      data: { cid: newCID, filename },
    });

  } catch(error) {
    console.log(error);
    return res.status(422).json({
      status: false,
      message: 'An unexpected error occurred. Please try again later'
    });
  }
}