'use server';

import Footer from '@/components/footer/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Github, GithubIcon, Twitter } from 'lucide-react';

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
      <div>
        <h3 className="text-sm font-bold text-left mb-2">Get notified when we launch</h3>
        <div className="flex gap-5">
          <Input placeholder="Email address" type="email" />
          <Button className="font-bold">Subscribe</Button>
        </div>
      </div>

      <p className="text-sm">Follow us and stay updated </p>

      <div className="flex items-center gap-5">
        <div>
          <div className="bg-zinc-800 rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <GithubIcon scale={'20'} />
          </div>
          <p className="text-sm text-center">Github</p>
        </div>
        <div>
          <div className="bg-zinc-800 rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <Twitter scale={'20'} />
          </div>
          <p className="text-sm text-center">Twitter</p>
        </div>
      </div>
      <p className="text-xs text-zinc-400 mt-20">
        © 2024 Zimbabwe Bank Rates. All rights reserved.
      </p>
    </main>
  );
}
