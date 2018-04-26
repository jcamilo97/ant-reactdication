//dev
import { combineReducers } from 'redux';

//Shared Reducers
import device from './device.reducer';

const rootReducer = combineReducers({
    device
});

export default rootReducer;