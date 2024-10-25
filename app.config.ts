import * as dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
  email: process.env.EMAIL || 'admin-test@blockodyssey.io',
  password: process.env.PASSWORD || 'blockodyssey1234',
};
