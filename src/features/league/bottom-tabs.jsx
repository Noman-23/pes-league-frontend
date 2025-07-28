import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { CalendarFold, Table2 } from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';

export function BottomTabs() {
  const { id } = useParams();
  console.log({ id });
  return (
    <div className='bg-neutral-950 border-t border-yellow-100 pt-1  flex items-center'>
      <NavLink
        to={`/league/${id}/points-table`}
        className={({ isActive }) =>
          cn(
            'grow flex flex-col justify-center items-center py-2',
            isActive ? 'text-yellow-200' : 'text-neutral-200'
          )
        }>
        <Table2 className='mb-1' />
        <span>Points Table</span>
      </NavLink>
      <Separator orientation='vertical' className=' !w-px !h-12 bg-yellow-100 mx-2' />
      <NavLink
        to={`/league/${id}/matches`}
        className={({ isActive }) =>
          cn(
            'grow flex flex-col justify-center items-center py-2',
            isActive ? 'text-yellow-200' : 'text-neutral-200'
          )
        }>
        <CalendarFold className='mb-1' />
        <span>Matches</span>
      </NavLink>
    </div>
  );
}
