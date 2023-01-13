import './App.css';
import LoginComponent from './shared/components/loginComponent/loginComponent';
import {BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
