import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from '../features/usersSlice';
import conversationReducer from '../features/conversationsSlice';

export default function configureStore () {
  const rootReducer = combineReducers({
    users: userReducer,
    conversations: conversationReducer
  });
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};