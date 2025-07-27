import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTeamsStore } from '@/store/teamsStore';
import { Pen } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function EditTeamForm({ team }) {
  // const { register, handleSubmit, reset } = useForm({
  //   defaultValues: {
  //     team: '',
  //   },
  // });

  const teams = useTeamsStore((store) => store.teams);

  console.log(teams);

  // const onSubmit = (data) => {
  //   // setTeams((prev) => [...prev, data?.team]);
  //   reset();
  // };

  return (
    // <form
    //   onSubmit={handleSubmit(onSubmit)}
    //   className='flex items-end gap-3'>
    <div className='flex items-end gap-3'>
      <Input
        id='team'
        type='text'
        placeholder='Enter Team Name'
        className='text-neutral-100 border border-white/50 !text-sm py-4'
        disabled
        defaultValue={team?.name ?? ''}
        // {...register('team', { required: true })}
      />
      <Button
        type='submit'
        className='bg-yellow-100 text-neutral-950 hover:bg-yellow-200'>
        <Pen />
      </Button>
    </div>
    // </form>
  );
}
