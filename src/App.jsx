import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import './global.styles.css';

// Pages
import { Home } from '@/pages/public/home';
import { Login } from '@/pages/public/login';
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
      <Routes
        location={location}
        key={location.pathname}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />

        {/* <Route
              path='/'
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }>
              <Route
                index
                element={<Dashboard />}
              />
              <Route
                path='leagues'
                element={<Leagues />}
              />
              <Route
                path='matches/:leagueId'
                element={<Matches />}
              />
            </Route>

            <Route
              path='*'
              element={<NotFound />}
            /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
