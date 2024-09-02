
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:"/",
    element:<h1>Home</h1>,
  },
  {
    path:"/addnotes",
    element:<h1>addnotes</h1>,
  },
  {
    path:"/shownotes",
    element:<h1>shownotes</h1>
  }
])

root.render(<RouterProvider router={router} />)