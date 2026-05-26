import { Button } from '@/components/ui/button';
import { DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, useController } from 'react-hook-form';
import { useCreateLeague } from './hooks/useLeagues';
import { useQueryClient } from '@tanstack/react-query';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field';

const getTeams = (team) => {
  return team?.split(',')?.reduce((acc, t) => {
    const name = t.trim();
    if (name.length > 0) acc.push(name);
    return acc;
  }, []);
};

export function AddLeagueForm({ onSuccess }) {
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: '',
      team: '',
      legType: 'single',
    },
  });

  const { field } = useController({
    control,
    name: 'legType',
  });

  const { mutate: createLeague, isPending } = useCreateLeague();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    console.log({ data });
    const teams = getTeams(data?.team);
    const payload = {
      name: data?.name,
      teams,
      legType: data?.legType || 'single',
    };
    console.log(payload);
    // API CALL
    createLeague(payload, {
      onSuccess: (res) => {
        console.log(res, 'res');
        queryClient.invalidateQueries(['leagues']);
        reset();
        onSuccess?.();
      },
    });
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
          <Label className={'text-neutral-400'} htmlFor='name'>
            League Name
          </Label>
          <Input
            disabled={isPending}
            id='name'
            type='text'
            placeholder='Enter League Name'
            className={'text-neutral-100 border border-white/50 !text-sm py-4'}
            {...register('name')}
            required
          />
        </div>
        <div className='grid gap-3 grow'>
          <Label htmlFor='team' className='text-neutral-400'>
            Team Names
          </Label>
          <Input
            disabled={isPending}
            id='team'
            type='text'
            placeholder='Enter Team Names (comma seperated)'
            className='text-neutral-100 border border-white/50 !text-sm py-4'
            {...register('team', { required: true })}
          />
        </div>
        <div className='grid gap-3 grow'>
          <span className='text-neutral-400 mb-2'>Select no. of Leg</span>
          <RadioGroup value={field.value} onValueChange={field.onChange} className='max-w-sm'>
            <FieldLabel htmlFor='single-leg'>
              <FieldContent>
                <FieldTitle>Single Leg</FieldTitle>
                <FieldDescription>Each team plays once</FieldDescription>
              </FieldContent>
              <RadioGroupItem value='single' id='single-leg' className='mt-0.5' />
            </FieldLabel>
            <FieldLabel htmlFor='double-leg'>
              <FieldContent>
                <FieldTitle>Home and Away</FieldTitle>
                <FieldDescription>Each team plays home and away matches</FieldDescription>
              </FieldContent>
              <RadioGroupItem value='double' id='double-leg' className='mt-0.5' />
            </FieldLabel>
          </RadioGroup>
        </div>
        <Button
          disabled={isPending}
          className='bg-yellow-100 text-neutral-950 w-full max-w-[400px]'>
          Create League
        </Button>
      </form>
    </>
  );
}
