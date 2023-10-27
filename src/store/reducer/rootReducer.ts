import { combineReducers } from 'redux';
import rankingReducer from './rankingReducer';

export const createRootReducer = combineReducers({
    ranking: rankingReducer
});

// export default createRootReducer;
export type RootState = ReturnType<typeof createRootReducer>;
