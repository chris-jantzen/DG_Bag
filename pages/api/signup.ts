import type { User } from './user';

import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import PrismaClient from '../../prisma/prismaClient';
// Might need to make a singleton for this
const prisma = PrismaClient.getInstance().prisma;

export default withIronSessionApiRoute(signupRoute, sessionOptions);

const generatePassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

async function signupRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = await req.body;
    const encryptedPassword = await generatePassword(password);
    await prisma.user.create({
      data: {
        email: email,
        password: encryptedPassword,
      },
    });
    const user: User = { isLoggedIn: true, email };
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
