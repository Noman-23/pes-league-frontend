import { WeekCard } from '@/components/shared/week-card';
import { MatchResultDrawer } from './match-result-drawer';
import { useMatches } from '../home/hooks/useMatches';
import { useParams } from 'react-router-dom';

export function Matches() {
  const { id } = useParams();

  const { data: weeks, isLoading } = useMatches(id);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className='bg-neutral-950 text-neutral-100'>
      <div className='flex flex-col gap-4 py-4 px-1'>
        {weeks?.map((week) => (
          <WeekCard key={week?._id} week={week} />
        ))}
      </div>
      <MatchResultDrawer />
    </div>
  );
}
