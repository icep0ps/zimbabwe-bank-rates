import Database from '@/services/database/database';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function POST(request: Request) {
  const body = await request.json();
  const rates = await Database.create.waitlist(body.email);
  return Response.json(rates);
}
