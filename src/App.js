import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Home'

import LoadBooks from './components/Book/BookList'
import LoadAuthors from './components/Author/AuthorList'
import LoadPublishers from './components/Publisher/PublisherList';

import BookDetail from './components/Book/BookDetail'
import AuthorDetail from './components/Author/AuthorDetail'
import PublisherDetail from './components/Publisher/PublisherDetail';
import CartDetail from './components/Cart/CartDetail';
import Login from './components/Login';

import Navbar from "./components/shared/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store, persistor } from "./store/store"

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar></Navbar>
          <ToastContainer />
          <Route path="/" exact component= { Home }></Route>
          <Route path="/books" component= { LoadBooks }></Route>
          <Route path="/authors" component={ LoadAuthors }></Route>      
          <Route path="/publishers" component={ LoadPublishers }></Route>      
          <Route path="/book/:id" component={ BookDetail }></Route>
          <Route path="/author/:id" component={ AuthorDetail }></Route>      
          <Route path="/publisher/:id" component={ PublisherDetail }></Route>
          <Route path="/login" component={ Login }></Route>
          <Route path="/cart" component={ CartDetail }></Route>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
