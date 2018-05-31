import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware} from 'redux';
import movieApp from './reducers/movieApp';

import App from './components/App';

const loggerMiddleware = createLogger();

const store = createStore(
  movieApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const renderApp = () => {
  render((
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
    ), document.getElementById('root')
  );
};

store.subscribe(renderApp);
renderApp();
