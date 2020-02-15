<<<<<<< HEAD
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import history from './history';
import { Router, Route, Switch } from 'react-router-dom';
import HomeMainContainer from './pages/Home/HomeMainContainer';
import Post from './pages/Post/index';
=======
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../src/styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import history from './history'
import { Router, Route, Switch } from 'react-router-dom'
import HomeMainContainer from './pages/Home/HomeMainContainer'
import Post from './pages/Post'
>>>>>>> 2b469ec6667422ddfe752ea6a68849b47935b190

interface Props {}

const App: React.FC<Props> = () => {
<<<<<<< HEAD
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={HomeMainContainer} />
          <Route exact path='/post' component={Post} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
=======
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={HomeMainContainer} />
                    <Route exact path='/post' component={Post} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
>>>>>>> 2b469ec6667422ddfe752ea6a68849b47935b190

export default App
