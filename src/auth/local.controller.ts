import { Request, Response, NextFunction } from 'express';
import { getUser } from '../user/user.services';
import { signToken } from './local.services';

/*
 * @params req Request Request object
 * @param res Response Response object
 * @param next NextFunction Next function
 * @returns Promise<Response> Response object
 */

export async function handleLoginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  try {
    const user = await getUser({ email });

    if (!user) {
      return res.status(404).json({ message: 'Invalid email' });
    }
    // Compare input password with encrypted password
    const validatePassword = await user.comparePassword(password);

    if (!validatePassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const payload = user.profile;

    // Generate JWT
    const token = signToken(payload);

    return res.status(200).json({ profile: user.profile, token });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
}
