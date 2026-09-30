import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AppLayout } from './layout/AppLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Detail } from '../pages/Detail';
import { Login } from '../pages/public/Login';
import { useIsAuthenticated } from './contexts/AuthContext';


export const AppRoutes = () => {
  const isAnthenticated = useIsAuthenticated();

    return (
         <BrowserRouter>
        {isAnthenticated && (
          <AppLayout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<About />} />
              <Route path='/detalhe/:id' element={<Detail />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </AppLayout>
        )}
        {!isAnthenticated && (
          <Routes>
            <Route path='*' element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    );
}