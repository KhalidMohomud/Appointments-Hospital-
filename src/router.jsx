import { createBrowserRouter, RouterProvider } from 'react-router'; // Make sure to import from 'react-router'
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Service from './pages/Service';
import Doctors from './pages/Doctors';
import Specialists from './pages/Specialists';

// Creating routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,  // Represents the default route (Home)
        element: <Home />,
      },
      {
        path: 'about',  // Correct path (no './')
        element: <About />,
      },
      {
        path: './pages/Service.jsx',  // Correct path (no './')
        element: <Service />,
      },
      {
        path: 'specialists',  // Correct path (no './')
        element: <Specialists />,
      },
      {
        path: 'doctors',  // Correct path (no './')
        element: <Doctors />,
      },
    ],
  },
]);

export default router;
