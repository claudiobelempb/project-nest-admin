import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
  APP_URL: z.string().url().optional().default('http://surb.com.br'),
  SUPPORT_EMAIL: z.string().optional().default('contact@surb.com.br'),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
});

export type Env = z.infer<typeof envSchema>;