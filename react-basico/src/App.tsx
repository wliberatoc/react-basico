import { AppRoutes } from './shared/Routes';
import { AuthProvider } from './shared/contexts/AuthContext';
import './App.css';


export function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
