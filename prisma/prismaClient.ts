import { PrismaClient as Client } from '@prisma/client';

export default class PrismaClient {
  public prisma: Client;
  private static instance: PrismaClient;
  private constructor() {
    this.prisma = new Client();
  }

  public static getInstance = () => {
    if (!PrismaClient.instance) {
      PrismaClient.instance = new PrismaClient();
    }
    return PrismaClient.instance;
  };
}
