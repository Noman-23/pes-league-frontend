import { formatDate } from '@/utils/date';
import { Heart } from 'lucide-react';

const date = new Date();

export function LeagueCard() {
  return (
    <div className='border border-yellow-100 rounded-lg  pb-2 overflow-hidden max-w-[575px] w-full mx-auto'>
      <div className='bg-yellow-100 py-2 px-3 flex justify-between items-center text-neutral-900'>
        <button className=' font-medium border-b-2 border-transparent hover:border-neutral-900 duration-300'>
          LEAGUE NAME
        </button>
        <div className='flex items-center gap-4'>
          <span className='text-xs font-normal'>{formatDate(date, 'MMMM D, YYYY')}</span>
          <button>
            <Heart size={20} />
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <Row />
        <Row
          pos='1'
          name='Noman'
          played='8'
          diff='+12'
          points='18'
        />
        <Row
          pos='20'
          name='Noman'
          played='8'
          diff='+12'
          points='18'
        />
        <Row
          pos='20'
          name='Noman'
          played='8'
          diff='+12'
          points='18'
        />
        <Row
          pos='20'
          name='Noman'
          played='8'
          diff='+12'
          points='18'
        />
        <Row
          pos='20'
          name='Noman'
          played='8'
          diff='+12'
          points='18'
        />
        <Row
          pos='20'
          name='Noman'
          played='8'
          diff='+12'
          points='18'
        />
      </div>
    </div>
  );
}

function Row({ pos, name = 'Name', played = 'P', diff = 'GD', points = 'PTS' }) {
  return (
    <div className='flex gap-2 px-2 min-h-8 items-center  py-1'>
      <div className='min-w-8'>
        {pos && (
          <p className='bg-amber-100 rounded-full w-[1.5rem] aspect-square flex items-center justify-center text-neutral-950 text-sm'>
            {pos}
          </p>
        )}
      </div>
      <p className='grow'>{name}</p>
      <p className='min-w-8 text-sm text-center'>{played}</p>
      <p className='min-w-12 text-sm text-center'>{diff}</p>
      <p className='min-w-12 text-sm text-center'>{points}</p>
    </div>
  );
}
