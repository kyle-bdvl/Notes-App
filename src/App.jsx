import MainNavigation from './pages/MainNavigation';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import NewNotespage from './pages/Newnotespage';
import Notespage from './pages/Notespage';
import store from './store/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const route = createBrowserRouter([{
    path: '/',
    element: <MainNavigation />,
    errorElement: <Errorpage />,
    children: [
      {index: true, element: <Homepage />},
      {path: 'notes', children: [
        {index: true, element: <Notespage />},
        {path: 'add', element: <NewNotespage />}
      ]}
    ]
  }])

  return (
    <Provider store={store}>
      <RouterProvider router={route}/>
    </Provider>
  )
}

export default App
