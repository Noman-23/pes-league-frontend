import withTransition from '@/components/shared/withTransition';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { AddLeagueForm } from '@/features/home/add-league-form';
import { FloatingButton } from '@/features/home/floating-button';
import { Header } from '@/features/home/header';
import { LeagueCard } from '@/features/home/league-card';

function Page() {
  return (
    <div className='min-h-screen w-full bg-neutral-950 px-2'>
      <Header />
      <div className='flex flex-col gap-8 pt-16'>
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
      </div>

      <Drawer>
        <DrawerTrigger>
          <FloatingButton />
        </DrawerTrigger>
        <DrawerContent className='bg-neutral-950 max-h-[90vh] '>
          <AddLeagueForm />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export const Home = withTransition(Page);
