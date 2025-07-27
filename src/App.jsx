import { AnimatePresence } from 'motion/react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './global.styles.css';

// Pages
import { Leagues } from '@/pages/public/leagues';
import { Login } from '@/pages/public/login';
import { FavoriteLeagues } from './pages/public/favorite-leagues';
import { LeagueDetails } from './pages/public/league-details';
import PageNotFound from './pages/public/page-not-found';
import { Matches } from './features/league/matches';
import { PointsTable } from './features/league/points-table';
// import Dashboard from '@/pages/Dashboard';
// import Leagues from '@/pages/Leagues';
// import Matches from '@/pages/Matches';
// import NotFound from '@/pages/NotFound';

// Optional: Layout and Auth wrapper
// import Layout from '@/components/layout/Layout';

function PrivateRoute({ children }) {
  // const { user } = useAuth();
  // return user ? (
  //   children
  // ) : (
  //   <Navigate
  //     to='/login'
  //     replace
  //   />
  // );
  return children;
}

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Navigate to='/leagues' replace />} />
        <Route path='/leagues' element={<Leagues />} />
        <Route path='/league/:id' element={<LeagueDetails />}>
          <Route index element={<Navigate to='points-table' replace />} />
          <Route path='points-table' element={<PointsTable />} />
          <Route path='matches' element={<Matches />} />
        </Route>
        <Route path='/favorites' element={<FavoriteLeagues />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
