import isomorphicFectch from 'isomorphic-fetch';
import promiseMiddleware from 'redux-promise-middleware';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';

const injecMiddleware = deps => ({ dispatch, getState }) => next => action => 
  next(typeof action === 'function'
  ? action({ ...deps, dispatch, getState })
  : action 
  );

export default function configureStore(options, rootReducer) {
  const { initialState = {}} = options;

  const middleware = [
    injecMiddleware({
      fetch: isomorphicFectch
    }),
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    }),
    reduxInmutableStateInvariant()
  ];

  return createStore(rootReducer, applyMiddleware(...middleware));

}