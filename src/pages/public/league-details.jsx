import withTransition from '@/components/shared/withTransition';
import { HomeHeader } from '@/features/home/components/home-header';
import { BottomTabs } from '@/features/league/bottom-tabs';
import { Outlet } from 'react-router-dom';

function Page() {
  return (
    <div className='min-h-screen fixed inset-0 bg-neutral-950 flex flex-col'>
      <HomeHeader />
      <div className='overflow-y-auto h-full pt-12'>
        <Outlet />
      </div>
      <BottomTabs />
    </div>
  );
}

export const LeagueDetails = withTransition(Page);
