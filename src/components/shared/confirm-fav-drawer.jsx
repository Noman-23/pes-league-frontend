import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useFavDrawerStore } from '@/store/favDrawerStore';
import { useFavLeagueStore } from '@/store/favLeagueStore';
import { cn } from '@/lib/utils';
import { Heart, HeartCrack, Trash2 } from 'lucide-react';

export function ConfirmFavDrawer() {
  const { isOpen, selectedLeague, closeDrawer } = useFavDrawerStore();
  const { leagues, addFavLeague, removeFavLeague } = useFavLeagueStore();

  const isFav = leagues.some((l) => l._id === selectedLeague?._id);

  const handleConfirm = () => {
    if (!selectedLeague) return;

    if (isFav) {
      removeFavLeague(selectedLeague._id);
    } else {
      addFavLeague(selectedLeague);
    }
    closeDrawer();
  };

  return (
    <Drawer
      open={isOpen}
      onClose={closeDrawer}>
      <DrawerContent className='p-4 bg-neutral-950 '>
        <DrawerHeader>
          <DrawerTitle className='text-yellow-100'>
            {isFav ? 'Remove from favorites?' : 'Add to favorites?'}
          </DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <div className='max-w-[400px] w-full mx-auto flex flex-col gap-3 text-neutral-800'>
            <Button
              variant='default'
              className={cn(
                'font-semibold text-neutral-950',
                isFav ? 'bg-rose-800 text-neutral-100' : 'bg-yellow-100'
              )}
              onClick={handleConfirm}>
              {isFav ? <HeartCrack /> : <Heart />}
              {isFav ? 'Remove' : 'Confirm'}
            </Button>

            <Button
              className='text-neutral-50'
              variant='link'
              onClick={closeDrawer}>
              Cancel
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
