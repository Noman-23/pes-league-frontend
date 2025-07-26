import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function AddTeamForm({ teams, setTeams }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      team: '',
    },
  });

  console.log(teams);

  const onSubmit = (data) => {
    setTeams((prev) => [...prev, data?.team]);
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
          Team Name
        </Label>
        <Input
          id='team'
          type='text'
          placeholder='Enter Team Name'
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
