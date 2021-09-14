import jwt from 'jsonwebtoken';
import User from '../models/User';
import { jwtSecret } from '../config';
import { IUser } from '../interfaces/Iuser';
import { Request, Response } from 'express';

function createToken(user: IUser) {
  const { id, address } = user;
  return jwt.sign({ address, id }, jwtSecret);
}

export const signUp = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { address, password } = req.body;
    
    if(!address || !password) {
      return res.status(422).json({
        message: 'Please, send your address and password'
      })
    }
  
    const user = await User.findOne({ address: address });
    if(user) return res.status(422).json({ error: 'The user already exists' });

    const newUser = new User({ address: address, password });
    await newUser.save();
    
    return res.status(201).json({
      data: newUser,
      message: 'Success!'
    });

  } catch(error) {
    console.log(error);
    return res.status(500).json({
      error: 'An unexpected error occurred.',
    })
  }
}

export const signIn = async (req: Request, res: Response) => {
  try {
    const { address, password } = req.body;
    if(!address || !password) {
      return res.status(422).json({
        message: 'Please, send your address and password'
      })
    }
  
    const user = await User.findOne({ address });
    if(!user) return res.status(422).json({ error: 'The user does not exists' });

    const isMatch = await user.comparePassword(password);

    if(isMatch) {
      return res.status(200).json({
        mesasage: 'Success!',
        data: { token: createToken(user) }
      })
    } else {
      return res.status(400).json({
        error: 'The address or password are incorrect'
      })
    }

  } catch(error) {
    console.log(error);
    return res.status(500).json({
      error: 'An unexpected error occurred.',
    })
  }
}