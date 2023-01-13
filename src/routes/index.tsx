import { Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from '../shared/components/loginComponent/loginComponent';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginComponent />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
