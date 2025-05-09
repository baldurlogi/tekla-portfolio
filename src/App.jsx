import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Bentobox from './components/Bentobox';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Bridal from './pages/Bridal';
import About from './pages/About';
import Blog from './pages/Blog';
import ProjectGallery from './pages/ProjectGallery';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet
} from "react-router-dom";

const Layout = () => {
  return (
    <div className='min-h-screen bg-[#f8f0e4] text-neutral-800'>
      <Navbar />
      <main className="pt-[5.5rem]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/bridal', element: <Bridal /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/blog', element: <Blog /> },
      { path: '/gallery/:projectId', element: <ProjectGallery /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
