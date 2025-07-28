import { LeagueCard } from '@/components/shared/league-card';
import { useParams } from 'react-router-dom';
import { usePointsTable } from '../home/hooks/useMatches';

const _league = {
  _id: '001',
  name: 'League 1',
  teams: [
    {
      pos: '1',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '2',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '3',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '4',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '1',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '2',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '3',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '4',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '1',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '2',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '3',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
    {
      pos: '12',
      name: 'Noman',
      played: '8',
      diff: '+12',
      points: '18',
    },
  ],
};

export function PointsTable() {
  const { id } = useParams();

  const { data: league } = usePointsTable(id);

  return (
    <div className='bg-neutral-950 text-neutral-100 py-4 px-0.5 xs:px-2'>
      <LeagueCard league={league} isFull={true} />
    </div>
  );
}
