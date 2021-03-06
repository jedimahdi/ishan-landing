import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import settingReducer from './setting/setting.reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// };

const rootReducer = combineReducers({
  settings: settingReducer
});

export default rootReducer;
// export default persistReducer(persistConfig, rootReducer);
