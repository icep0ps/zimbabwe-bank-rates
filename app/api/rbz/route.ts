import Getpdf from '@/services/getpdf';
import Extractor from '@/utils/extractor/extractor';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  Getpdf.run().then((response) => {
    Extractor.read();
  });
}
