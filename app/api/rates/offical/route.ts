import Database from '@/services/database/database';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {
  const rates = await Database.get.offical('USD').catch((error) => {
    return Response.json(null, {
      statusText: error.message,
      status: 500,
    });
  });

  if (rates instanceof Response) return rates;

  return Response.json(
    {
      data: rates[0] === undefined ? [] : rates[0],
    },
    { status: 200 }
  );
}
