import { Pen } from 'lucide-react';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';
import { useMatchDrawerStore } from '@/store/matchDrawerStore';

export function WeekCard({ week }) {
  return (
    <div className='border border-yellow-100  rounded-lg  pb-2 overflow-hidden max-w-[500px] w-full mx-auto'>
      <div className='bg-yellow-100 py-2 px-3 flex justify-between items-center text-neutral-900 w-full'>
        <p className='text-center w-full font-semibold text-sm'>Week {week?._id}</p>
      </div>
      <div className='flex flex-col gap-4 py-3'>
        {week?.matches?.map((match) => (
          <Match key={match?._id} match={match} />
        ))}
      </div>
    </div>
  );
}

function getMatchResult(home, away) {
  if (home === away) return 'draw';
  else if (home > away) return 'away';
  else return 'home';
}

function Match({ match }) {
  const matchResult = getMatchResult(match?.homeScore, match?.awayScore);
  const openDrawer = useMatchDrawerStore((s) => s.openDrawer);

  const handleUpdateResult = () => {
    openDrawer(match);
  };

  return (
    <div className='flex gap-2 items-center'>
      <div className='grow text-xs capitalize pl-4 text-neutral-200'>
        <div
          className={cn(
            'flex justify-between items-center',
            match?.played && matchResult === 'home' && 'text-neutral-500'
          )}>
          <p>{match?.homeTeam}</p>
          <p>{match?.played ? match?.homeScore : '--'}</p>
        </div>
        <div
          className={cn(
            'flex justify-between items-center',
            match?.played && matchResult === 'away' && 'text-neutral-500'
          )}>
          <p>{match?.awayTeam}</p>
          <p>{match?.played ? match?.awayScore : '--'}</p>
        </div>
      </div>
      <Separator orientation='vertical' className='!h-6 bg-neutral-400 mx-1' />

      <div className='w-16 flex justify-end px-2'>
        <button
          onClick={handleUpdateResult}
          className='bg-yellow-200/20 text-yellow-200 rounded-full text-sm p-2'>
          <Pen size={16} />
        </button>
      </div>
    </div>
  );
}
