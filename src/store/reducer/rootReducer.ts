import { combineReducers } from 'redux';
import rankingReducer from './rankingReducer';
import authReducer from './authReducer';

export const createRootReducer = combineReducers({
    ranking: rankingReducer,
    authReducer
});

// export default createRootReducer;
export type RootState = ReturnType<typeof createRootReducer>;
