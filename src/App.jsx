import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';
import renderRoutes from 'utils/renderRoutes';
import routes from 'routes';

function App() {
  return (
    <Router>
      <AuthProvider>{renderRoutes(routes)}</AuthProvider>
    </Router>
  );
}

export default App;
