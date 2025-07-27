import { Button } from '@/components/ui/button';
import { DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';

const getTeams = (team) => {
  return team?.split(',')?.reduce((acc, t) => {
    const name = t.trim();
    if (name.length > 0) acc.push(name);
    return acc;
  }, []);
};

export function AddLeagueForm({ onSuccess }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      team: '',
    },
  });

  const onSubmit = (data) => {
    console.log({ data });
    const teams = getTeams(data?.team);
    const payload = {
      name: data?.name,
      teams,
    };
    console.log(payload);
    // API CALL
    reset();
    onSuccess?.();
  };

  return (
    <>
      <DrawerHeader className='shrink-0 '>
        <DrawerTitle className='text-yellow-100'>Wanna create a new League?</DrawerTitle>
      </DrawerHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col max-w-[400px] w-full mx-auto my-2 gap-4 pb-8 px-4'>
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
            {...register('name')}
            required
          />
        </div>
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
        <Button className='bg-yellow-100 text-neutral-950 w-full max-w-[400px]'>
          Create League
        </Button>
      </form>
    </>
  );
}
