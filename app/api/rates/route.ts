import Database from '@/services/database/database';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {
  try {
    const rates = await Database.get.rates();
    return Response.json(
      {
        data: rates[0] === undefined ? [] : rates,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(null, {
      status: 500,
      statusText: error instanceof Error ? error.message : (error as string),
    });
  }
}
