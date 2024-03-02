import Database from '@/utils/database/database';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {
  const rates = await Database.get.offical('USD');
  return Response.json(rates[0]);
}
