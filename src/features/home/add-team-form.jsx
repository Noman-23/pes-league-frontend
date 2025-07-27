import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTeamsStore } from '@/store/teamsStore';
import { PlusIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function AddTeamForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      team: '',
    },
  });
  const teams = useTeamsStore((store) => store.teams);
  const addTeam = useTeamsStore((store) => store.addTeam);
  console.log(teams);

  const onSubmit = (data) => {
    const teamList = data?.team?.split(',');
    console.log(teamList);
    for (let i = 0; i <= teamList?.length; i++) {
      const t = teamList[i]?.trim();
      addTeam(t);
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex items-end gap-3'>
      <div className='grid gap-3 grow'>
        <Label
          htmlFor='team'
          className='text-neutral-400'>
          Team Names
        </Label>
        <Input
          id='team'
          type='text'
          placeholder='Enter Team Names (comma seperated)'
          className='text-neutral-100 border border-white/50 !text-sm py-4'
          {...register('team', { required: true })}
        />
      </div>
      <Button
        type='submit'
        className='bg-yellow-100 text-neutral-950 hover:bg-yellow-200'>
        <PlusIcon />
      </Button>
    </form>
  );
}
