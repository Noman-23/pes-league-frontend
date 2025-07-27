import { LeagueList } from '@/components/shared/league-list';
import withTransition from '@/components/shared/withTransition';
import { HomeHeader } from '@/features/home/components/home-header';
import { useFavLeagueStore } from '@/store/favLeagueStore';
import { HeartCrack } from 'lucide-react';

function Page() {
  const leagues = useFavLeagueStore((s) => s.leagues);
  return (
    <div className='min-h-screen w-full bg-neutral-950 px-2'>
      <HomeHeader fav />
      {leagues?.length ? (
        <LeagueList leagues={leagues} />
      ) : (
        <div className='grid place-content-center h-screen text-yellow-100'>
          <div className='flex items-center flex-col  gap-3'>
            <HeartCrack size={64} />
            <p className='text-xl'>Don't have a Favorite League?</p>
            <p className='text-sm'>Feel free to add some league into your favorites</p>
          </div>
        </div>
      )}
    </div>
  );
}

export const FavoriteLeagues = withTransition(Page);
