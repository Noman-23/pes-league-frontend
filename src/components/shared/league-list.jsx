import { useFavLeagueStore } from '@/store/favLeagueStore';
import { LeagueCard } from './league-card';
import { ConfirmFavDrawer } from './confirm-fav-drawer';

export function LeagueList({ leagues }) {
  const favLeagues = useFavLeagueStore((state) => state.leagues);
  return (
    <div className='flex flex-col gap-8 py-16'>
      {leagues?.map((league) => {
        const isFav = favLeagues.some((f) => f._id === league._id);

        return (
          <LeagueCard
            key={league._id}
            league={league}
            isFav={isFav} // ✅ pass this as prop
          />
        );
      })}
      <ConfirmFavDrawer />
    </div>
  );
}
