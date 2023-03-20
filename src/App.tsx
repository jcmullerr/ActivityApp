import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';
import { SideMenu } from './shared/components/sideMenu/sideMenu';

function App () {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <SideMenu>
          <AppRoutes />
        </SideMenu>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
