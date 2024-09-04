
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Views/Home/Home';
import Addnotes from './Views/Addnotes/Addnotes';
import Shownotes from './Views/Shownotes/Shownotes'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />,
  },
  {
    path:"/add",
    element:<Addnotes />,
  },
  {
    path:"/show",
    element:<Shownotes />,
  }
])

root.render(<div>
<RouterProvider router={router} />
<Toaster/>
</div>
)