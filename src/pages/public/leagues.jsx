import { LeagueList } from '@/components/shared/league-list';
import withTransition from '@/components/shared/withTransition';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { AddLeagueForm } from '@/features/home/add-league-form';
import { FloatingButton } from '@/features/home/components/floating-button';
import { HomeHeader } from '@/features/home/components/home-header';
import { useState } from 'react';

const leagues = [
  {
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
    ],
  },
  {
    _id: '002',
    name: 'League 2',
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
    ],
  },
];

function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className='min-h-screen w-full bg-neutral-950 px-2'>
      <HomeHeader />

      <LeagueList leagues={leagues} />
      {/* IF role === admin */}
      <Drawer
        open={open}
        onOpenChange={setOpen}>
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
