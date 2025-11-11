import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      )}
    </Router>
  );
};

export default App;