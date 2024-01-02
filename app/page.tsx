import BankRate from '@/components/bankRate';
import CurrencyConverter from '@/components/currency_converter/currencyConverter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <BankRate />
      <CurrencyConverter />
    </main>
  );
}
