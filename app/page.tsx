'use server';

import Link from 'next/link';
import { Toaster } from '@/components/ui/toaster';
import Waitlist from '@/components/waitlist/waitlist';
import { GithubIcon, Twitter } from 'lucide-react';

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 mt-10 h-fit">
      <div>
        <h1 className="text-2xl">Zimbabwe bank rates</h1>
        <p className="text-xs text-center">Comming soon</p>
      </div>
      <p className="text-sm text-center w-3/4">
        An open source platform to stay updated with real-time Zimbabwean Dollars (ZWL)
        bank rates and explore seamless currency conversions.
      </p>
      <Waitlist />

      <p className="text-sm mt-16">Follow us and stay updated </p>

      <div className="flex items-center gap-5 ">
        <div>
          <div className="bg-zinc-800 rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <GithubIcon scale={'20'} />
          </div>
          <Link
            href={'https://github.com/icep0ps/zimbabwe-bank-rates'}
            className="text-sm text-center underline"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <div>
          <div className="bg-zinc-800 rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <Twitter scale={'20'} />
          </div>
          <Link
            href={'https://twitter.com/icepopsfr'}
            className="text-sm text-center underline"
            target="_blank"
          >
            Twitter
          </Link>
        </div>
      </div>
      <p className="text-xs text-zinc-400 ">
        © 2024 Zimbabwe Bank Rates. All rights reserved.
      </p>
      <Toaster  />
    </main>
  );
}
