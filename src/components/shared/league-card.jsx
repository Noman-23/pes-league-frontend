import { cn } from '@/lib/utils';
import { useFavDrawerStore } from '@/store/favDrawerStore';
import { formatDate } from '@/utils/date';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function LeagueCard({ league, isFav, isFull = false }) {
  const openDrawer = useFavDrawerStore((s) => s.openDrawer);

  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/league/${league?._id}/points-table`);
  };

  return (
    <div className='border border-yellow-100  rounded-lg  pb-2 overflow-hidden max-w-[575px] w-full mx-auto'>
      <div className='bg-yellow-100 py-2 px-3 flex justify-between items-center text-neutral-900'>
        <span className={cn('font-medium text-sm capitalize grow', isFull && 'text-center')}>
          {league?.name}
        </span>
        {!isFull && (
          <div className='flex items-center gap-4'>
            <button onClick={handleView} className='!text-xs font-normal'>
              {formatDate(league?.createdAt, 'MMMM D, YYYY')}
            </button>
            <button onClick={() => openDrawer(league)}>
              {isFav ? <Heart size={20} fill='#f05959' stroke='#f05959' /> : <Heart size={20} />}
            </button>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-1 overflow-x-auto shrink-0'>
        <Row
          name='Team'
          played='P'
          win='W'
          lose='L'
          draw='D'
          scored='S'
          concede='C'
          diff='GD'
          points='PTS'
          isFull={isFull}
        />
        {league?.teamIds?.map((team, index) => {
          const isFirst = index === 0;
          const isLast = index === league?.teamIds?.length - 1;

          return (
            <Row
              key={index}
              pos={index + 1}
              name={team?.name}
              played={team?.played}
              win={team?.win}
              lose={team?.lose}
              draw={team?.draw}
              scored={team?.scored}
              concede={team?.concede}
              diff={team?.goal_diff > 0 ? '+' + team?.goal_diff : team?.goal_diff}
              points={team?.points}
              posClassName={isFirst ? 'bg-green-200' : isLast ? 'bg-red-200' : 'bg-yellow-100'}
              isFull={isFull}
            />
          );
        })}
      </div>
    </div>
  );
}

function Row({
  pos,
  name,
  played,
  win,
  lose,
  draw,
  scored,
  concede,
  diff,
  points,
  posClassName = 'bg-yellow-100',
  isFull,
}) {
  return (
    <div className='flex gap-0 sm:gap-0.5 px-2 min-h-8 items-center text-xs xs:text-sm py-1'>
      <div className='min-w-6 xs:min-w-8'>
        {pos && (
          <p
            className={`rounded-full w-4 xs:w-6 aspect-square flex items-center justify-center text-neutral-950 text-[10px] xs:text-xs ${posClassName}`}>
            <span>{pos}</span>
          </p>
        )}
      </div>
      <p className='grow shrink-0'>{name}</p>
      <p className='min-w-8 text-center'>{played}</p>
      {isFull && (
        <>
          <p className='min-w-6 xs:min-w-8 text-center'>{win}</p>
          <p className='min-w-6 xs:min-w-8 text-center'>{lose}</p>
          <p className='min-w-6 xs:min-w-8 text-center'>{draw}</p>
          <p className='min-w-6 xs:min-w-8 text-center'>{scored}</p>
          <p className='min-w-6 xs:min-w-8 text-center'>{concede}</p>
        </>
      )}
      <p className='min-w-8 text-center'>{diff}</p>
      <p className='min-w-8 text-center'>{points}</p>
    </div>
  );
}
