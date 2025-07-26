import { PlusIcon } from 'lucide-react';

export function FloatingButton() {
  return (
    <div className='fixed right-4 bottom-12 '>
      <div className='bg-yellow-100 text-neutral-950 rounded-full p-3'>
        <PlusIcon size={32} />
      </div>
    </div>
  );
}
