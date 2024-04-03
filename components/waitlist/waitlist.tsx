'use client';

import { FormEvent, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '@/components/ui/use-toast';

type Props = {};

const Waitlist = (props: Props) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const baseurl =
      process.env.NODE_ENV == 'production'
        ? process.env.NEXT_PUBLIC_VERCEL_URL
        : process.env.NEXT_PUBLIC_DEV_URL;

    try {
      const res = await fetch(`${baseurl}/api/waitlist/`, {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      const user = await res.json();

      if (user) {
        toast({
          title: 'Already exists',
          description: `You are already on the waiting list`,
        });
        return;
      }

      toast({
        title: 'Success',
        description: `You have been sucessfully added to the waitlist`,
      });
    } catch (error) {
      toast({
        title: 'Failed',
        description: `${error}`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <h3 className="text-sm font-bold text-left mb-2">Get notified when we launch</h3>
      <div className="flex gap-5">
        <Input
          placeholder="Email address"
          type="email"
          required
          name="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <Button className="font-bold" type="submit">
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default Waitlist;
