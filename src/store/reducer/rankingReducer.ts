import { AnyAction } from "redux";
import Ranking, { rankingObjectType } from "../../Container/Ranking";
import RankingType from "../actionType/rankingType";
import rankingActions from "../actions/rankingActions"
import {produce} from "immer";

type initStateType = {
    t20RankingList: rankingObjectType[],
    odiRankingList: rankingObjectType[],
    testRankingList: rankingObjectType[]
}

const initState: initStateType = {
    t20RankingList: [{
        countryName: "",
        id: 1,
        position: 1,
        rankingPoints: 1
    }],
    odiRankingList: [{
        countryName: "",
        id: 1,
        position: 1,
        rankingPoints: 1
    }],
    testRankingList: [{
        countryName: "",
        id: 1,
        position: 1,
        rankingPoints: 1
    }],
}

type Action = ReturnType<typeof rankingActions[keyof typeof rankingActions]>;
const rankingReducer = (state: initStateType = initState, action: Action) => produce(state, draft => {
    switch(action.type) {
        case RankingType.getT20RankingListSuccess:
            Object.assign(draft, {t20RankingList: action.payload});
            break;
        case RankingType.getOdiRankingListSuccess:
            Object.assign(draft, {odiRankingList: action.payload});
            break;
        case RankingType.getTestRankinglistSuccess:
            Object.assign(draft, {testRankingList: action.payload});
            break;
        default:
            Object.assign(draft);
    }
})

export default rankingReducer;