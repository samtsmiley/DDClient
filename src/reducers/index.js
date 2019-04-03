import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth'
import protectedData from './protected-data'


const rootReducer = combineReducers({
  form: formReducer,
  auth,
  protectedData,
});

export default rootReducer;