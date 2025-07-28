import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { useMatchDrawerStore } from '@/store/matchDrawerStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useUpdateMatchResult } from '../home/hooks/useMatches';
import { useQueryClient } from '@tanstack/react-query';

const MatchResultSchema = z.object({
  homeScore: z.string().refine((val) => /^\d+$/.test(val) && Number(val) >= 0, {
    message: 'Must be a positive number',
  }),
  awayScore: z.string().refine((val) => /^\d+$/.test(val) && Number(val) >= 0, {
    message: 'Must be a positive number',
  }),
});

export function MatchResultDrawer() {
  const { isOpen, selectedMatch, closeDrawer } = useMatchDrawerStore();
  console.log({ selectedMatch });
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(MatchResultSchema),
    defaultValues: {
      homeScore: selectedMatch?.homeScore?.toString() ?? '',
      awayScore: selectedMatch?.awayScore?.toString() ?? '',
    },
  });

  const queryClient = useQueryClient();
  const { mutate: updateScore, isPending } = useUpdateMatchResult();

  useEffect(() => {
    if (selectedMatch) {
      reset({
        homeScore: selectedMatch.homeScore?.toString() ?? '',
        awayScore: selectedMatch.awayScore?.toString() ?? '',
      });
    }
  }, [selectedMatch, reset]);

  const handleConfirm = (data) => {
    if (!selectedMatch) return;
    const payload = {
      matchId: selectedMatch?._id,
      scores: {
        homeScore: Number(data?.homeScore),
        awayScore: Number(data?.awayScore),
      },
    };
    updateScore(payload, {
      onSuccess: (data) => {
        console.log('success', data);
        queryClient.invalidateQueries({ queryKey: ['points-table', data.leagueId] });
        queryClient.invalidateQueries({ queryKey: ['matches', data.leagueId] });
        closeDrawer();
      },
    });
    // API CALL
  };

  return (
    <Drawer open={isOpen} onClose={closeDrawer}>
      <DrawerContent className='p-4 bg-neutral-950 '>
        <DrawerHeader>
          <DrawerTitle className='text-yellow-100'>Update Match Result</DrawerTitle>
        </DrawerHeader>
        <form onSubmit={handleSubmit(handleConfirm)}>
          <div className='max-w-[400px] w-full mx-auto py-3 flex flex-col gap-6 text-neutral-200'>
            <div className='flex items-center justify-center gap-4'>
              <label className='capitalize' htmlFor='homeTeam'>
                {selectedMatch?.homeTeam}
              </label>
              <Input
                disabled={isPending}
                id='homeTeam'
                type='tel'
                inputMode='numeric'
                pattern='[0-9]*'
                className='border-0 rounded-none border-b border-neutral-100 w-12 p-0 text-center'
                {...register('homeScore')}
              />
            </div>

            <div className='flex items-center justify-center gap-4'>
              <label className='capitalize' htmlFor='awayTeam'>
                {selectedMatch?.awayTeam}
              </label>
              <Input
                disabled={isPending}
                id='awayTeam'
                type='tel'
                inputMode='numeric'
                pattern='[0-9]*'
                className='border-0 rounded-none border-b border-neutral-100 w-12 p-0 text-center'
                {...register('awayScore')}
              />
            </div>
            <Button
              disabled={isPending}
              variant='default'
              className='font-semibold bg-yellow-100 text-neutral-950'>
              Confirm
            </Button>
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
