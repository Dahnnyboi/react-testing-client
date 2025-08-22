import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';
import { Toast } from 'components/toast';
import renderRoutes from 'utils/renderRoutes';
import routes from 'routes';

function App() {
  return (
    <Router>
      <AuthProvider>{renderRoutes(routes)}</AuthProvider>
      <Toast />
    </Router>
  );
}

export default App;
