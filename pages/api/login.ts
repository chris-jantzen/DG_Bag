import type { User } from './user';

import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import PrismaClient from '../../prisma/prismaClient';
// Might need to make a singleton for this
const prisma = PrismaClient.getInstance().prisma;

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = await req.body;

  try {
    const userFromDb = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!userFromDb) {
      return res.status(404).send(`User with email: ${email} not found`);
    }
    const auth: boolean = await bcrypt.compare(password, userFromDb.password);
    if (auth) {
      const { email } = userFromDb;
      const user: User = { isLoggedIn: true, email };
      req.session.user = user;
      await req.session.save();
      res.status(200).send(user);
    } else {
      res.status(400).send(`Incorrect password for ${email}`);
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
