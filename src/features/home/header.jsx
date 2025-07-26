import { AlignRight } from 'lucide-react';

export function Header() {
  return (
    <div className='fixed top-0 left-0 right-0'>
      <div className='flex items-center justify-between py-2 min-h-12 border-b border-yellow-100 text-yellow-100 bg-neutral-950 px-4'>
        <div>LOGO</div>
        <button>
          <AlignRight />
        </button>
      </div>
    </div>
  );
}
