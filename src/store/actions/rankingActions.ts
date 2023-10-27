import { rankingObjectType } from "../../Container/Ranking"
import RankingType from "../actionType/rankingType"

export const getT20RankingList = () => {
    return {
        type: RankingType.getT20RankingList as const,
    }
}

export const getT20RankingListSuccess = (data: rankingObjectType[]) => {
    return {
        type: RankingType.getT20RankingListSuccess as const,
        payload: data
    }
}

export const getOdiRankingListSuccess = (data: rankingObjectType[]) => {
    return {
        type: RankingType.getOdiRankingListSuccess as const,
        payload: data
    }
}

export const getTestRankinglistSuccess = (data: rankingObjectType[]) => {
    return {
        type: RankingType.getTestRankinglistSuccess as const,
        payload: data
    }
}

export const getOdiRankinglist = () => {
    return {
        type: RankingType.getOdiRankingList as const,
    }
}

export const getTestRankinglist = () => {
    return {
        type: RankingType.getT20RankingList as const,
    }
}

export default {
    getT20RankingList,
    getOdiRankinglist,
    getTestRankinglist,
    getT20RankingListSuccess,
    getOdiRankingListSuccess,
    getTestRankinglistSuccess
}