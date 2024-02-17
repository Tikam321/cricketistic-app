import { AnyAction } from "redux";
import Ranking, { rankingObjectType } from "../../Container/Ranking";
import RankingType from "../actionType/rankingType";
import rankingActions from "../actions/rankingActions"
import {produce} from "immer";

type rankingReducerType = {
    t20RankingList: rankingObjectType[],
    odiRankingList: rankingObjectType[],
    testRankingList: rankingObjectType[]
}

const initState: rankingReducerType = {
    t20RankingList: [{
        countryName: "INDIA",
        id: 1,
        position: 1,
        rankingPoints: 1
    }],
    odiRankingList: [{
        countryName: "INDIA",
        id: 1,
        position: 1,
        rankingPoints: 1
    }],
    testRankingList: [{
        countryName: "INDIA",
        id: 1,
        position: 1,
        rankingPoints: 1
    }],
}

type Action = ReturnType<typeof rankingActions[keyof typeof rankingActions]>;
const rankingReducer = (state: rankingReducerType = initState, action: Action) => produce(state, draft => {
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