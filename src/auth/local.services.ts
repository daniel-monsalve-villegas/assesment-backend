import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserDocument } from '../user/user.model';
import { getUser } from '../user/user.services';
import { AuthRequest } from './local.types';

const SECRET = process.env.SECRET_TOKEN_APP as string;

/*
 * Return a JWT token signed by the app secret
 *
 * @param payload Object | String Data to be signed
 * @returns token String
 */
export function signToken(payload: any) {
  const token = jwt.sign(payload, SECRET, { expiresIn: '3h' });
  return token;
}

/*
 * Validates a JWT
 * æparam token String JWT token
 * @returns Object | Boolean
 */

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET) as UserDocument;

    return decoded;
  } catch (error) {
    return false;
  }
}

// is Authenticated?
export async function isAuthenticated(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized token' });
  }

  const decoded = verifyToken(token) as UserDocument;

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized decoded' });
  }

  const user = await getUser({ email: decoded.email });

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
  return true;
}
