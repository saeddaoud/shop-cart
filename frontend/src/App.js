import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatePresence>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/cart' component={CartScreen} />
          <Route exact path='/product/:id' component={ProductDetailsScreen} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default App;
