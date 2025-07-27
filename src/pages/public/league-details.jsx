import withTransition from '@/components/shared/withTransition';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Table2 } from 'lucide-react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

function Page() {
  const { id } = useParams();
  console.log({ id });
  return (
    <div className='min-h-screen bg-neutral-950 flex flex-col'>
      <Outlet />
      <div className='fixed bottom-0 left-0 right-0 '>
        <div className='bg-neutral-950 border-t border-yellow-100 py-2 flex items-center'>
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
            <Table2 className='mb-1' />
            <span>Matches</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export const LeagueDetails = withTransition(Page);
