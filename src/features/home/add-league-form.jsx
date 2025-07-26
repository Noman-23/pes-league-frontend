import { Button } from '@/components/ui/button';
import { DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { AddTeamForm } from './add-team-form';
import { EditTeamForm } from './edit-team-form';

export function AddLeagueForm() {
  const [teams, setTeams] = useState([]);
  return (
    <>
      <DrawerHeader className='shrink-0'>
        <DrawerTitle className='text-yellow-100'>Wanna create a new League?</DrawerTitle>
        <div className='flex flex-col max-w-[400px] w-full mx-auto my-2 gap-3'>
          <div className='grid gap-3'>
            <Label
              className={'text-neutral-400'}
              htmlFor='name'>
              League Name
            </Label>
            <Input
              id='name'
              type='text'
              placeholder='Enter League Name'
              className={'text-neutral-100 border border-white/50 !text-sm py-4'}
              // {...register('username')}
              required
            />
          </div>
          <AddTeamForm
            teams={teams}
            setTeams={setTeams}
          />
          <div>
            {teams?.map((team, i) => (
              <EditTeamForm
                key={i}
                teams={teams}
                setTeams={setTeams}
              />
            ))}
          </div>
        </div>
      </DrawerHeader>
      <DrawerFooter>
        <div className='flex justify-center'>
          <Button className='bg-amber-100 text-neutral-950 w-full max-w-[400px]'>
            Create League
          </Button>
        </div>
      </DrawerFooter>
    </>
  );
}
