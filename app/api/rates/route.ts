import Database from '@/services/database/database';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {
  const rates = await Database.get.rates();
  return rates[0] === undefined ? Response.json([]) : Response.json(rates[0]);
}
