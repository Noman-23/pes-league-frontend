import { LeagueList } from '@/components/shared/league-list';
import withTransition from '@/components/shared/withTransition';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { AddLeagueForm } from '@/features/home/add-league-form';
import { FloatingButton } from '@/features/home/components/floating-button';
import { HomeHeader } from '@/features/home/components/home-header';
import { useLeagues } from '@/features/home/hooks/useLeagues';
import { useState } from 'react';

function Page() {
  const [open, setOpen] = useState(false);
  const { data: leagues, isLoading } = useLeagues();

  console.log(leagues);
  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className='min-h-screen w-full bg-neutral-950 px-2'>
      <HomeHeader />

      <LeagueList leagues={leagues} />
      {/* IF role === admin */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <FloatingButton onClick={() => setOpen(true)} />
        </DrawerTrigger>
        <DrawerContent className='bg-neutral-950 max-h-[90vh] '>
          <AddLeagueForm onSuccess={() => setOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export const Leagues = withTransition(Page);
