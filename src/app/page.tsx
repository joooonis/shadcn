import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Card = () => {
  return (
    <div className='w-40 h-40 rounded-xl bg-red-400 flex justify-center items-center text-xl text-white'>
      hi
    </div>
  );
};

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
