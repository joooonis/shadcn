import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col w-full'>
        <Button variant='default'>hi</Button>
        <Button variant='destructive'>hi</Button>
        <Button variant='outline'>hi</Button>
        <Button variant='secondary'>hi</Button>
        <Button variant='ghost'>hi</Button>
        <Button variant='link'>hi</Button>
      </div>
    </main>
  );
}
