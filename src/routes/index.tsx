import Button from '@mui/material/Button';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      {/* <Route path="/login" element={<LoginComponent />} /> */}
      <Route path="/login" element={<Button onClick={toggleTheme} variant='contained' color='primary' sx={{ marginTop: 3, borderRadius: 3 }}>Toggle theme</Button>}/>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
