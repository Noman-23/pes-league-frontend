import { useFavDrawerStore } from '@/store/favDrawerStore';
import { formatDate } from '@/utils/date';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const _date = new Date();

export function LeagueCard({ league, isFav }) {
  // useFavLeagueStore(s => s.)
  const openDrawer = useFavDrawerStore((s) => s.openDrawer);

  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/league/${league?._id}/points-table`);
  };

  return (
    <div className='border border-yellow-100  rounded-lg  pb-2 overflow-hidden max-w-[575px] w-full mx-auto'>
      <div className='bg-yellow-100 py-2 px-3 flex justify-between items-center text-neutral-900'>
        <button className=' font-medium border-b-2 border-transparent hover:border-neutral-900 duration-300'>
          {league?.name}
        </button>
        <div className='flex items-center gap-4'>
          <button onClick={handleView} className='text-xs font-normal'>
            {formatDate(_date, 'MMMM D, YYYY')}
          </button>
          <button onClick={() => openDrawer(league)}>
            {isFav ? <Heart size={20} fill='#f05959' stroke='#f05959' /> : <Heart size={20} />}
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <Row />
        {league?.teams?.map((team, index) => {
          const isFirst = index === 0;
          const isLast = index === league?.teams?.length - 1;

          return (
            <Row
              key={index}
              pos={team?.pos}
              name={team?.name}
              played={team?.played}
              diff={team?.diff}
              points={team?.points}
              posClassName={isFirst ? 'bg-green-200' : isLast ? 'bg-red-200' : 'bg-yellow-100'}
            />
          );
        })}
      </div>
    </div>
  );
}

function Row({
  pos,
  name = 'Team',
  played = 'P',
  diff = 'GD',
  points = 'PTS',
  posClassName = 'bg-yellow-100',
}) {
  return (
    <div className='flex gap-0 sm:gap-0.5 px-2 min-h-8 items-center text-xs xs:text-sm py-1'>
      <div className='min-w-8'>
        {pos && (
          <p
            className={`rounded-full w-[1.5rem] aspect-square flex items-center justify-center text-neutral-950 text-xs ${posClassName}`}>
            <span>{pos}</span>
          </p>
        )}
      </div>
      <p className='grow'>{name}</p>
      <p className='min-w-8 text-center'>{played}</p>
      <p className='min-w-10 text-center'>{diff}</p>
      <p className='min-w-8 text-center'>{points}</p>
    </div>
  );
}
