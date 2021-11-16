import { v4 as uuidV4 } from 'uuid';
import { createReadStream } from 'fs';
import { Filelike } from 'web3.storage'
import { Request, Response } from 'express';
import { storeFiles, makeFileObject } from '../libs/web3Storage';

export const createPost = async (req: Request, res: Response): Promise<Response> => {
  const { tagLine, fullText } = req.body;

  if(req.file) {
    const stream = createReadStream(req.file.path);
    const filelike: Filelike = {
      stream: () => stream,
      name: req.file.filename,
    }
    const postPicCID = await storeFiles([ filelike ]);

    const postDataFilename = uuidV4() + '.json';
    const postData = makeFileObject({
      obj: {
        tagLine,
        fullText,
        postPicMetadata: {
          cid: postPicCID,
          filename: req.file.filename,
        }
      },
      filename: postDataFilename,
      options: { type: 'application/json' }
    });

    const postDataCID = await storeFiles([ postData ]);

    return res.status(200).json({
      status: true,
      data: {
        cid: postDataCID,
        filename: postDataFilename,
      }
    });
  }

  return res.status(422).json({
    status: false,
    message: 'An unexpected error occurred'
  });
}