import Getpdf from '@/services/rates/getpdf';
import Extractor from '@/services/rates/extractor/extractor';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  Getpdf.run().then((response) => {
    Extractor.read();
  });
}
