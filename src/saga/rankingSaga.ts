import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios, { Axios } from "axios";
import RankingType from "../store/actionType/rankingType";
import { getOdiRankingListSuccess, getT20RankingListSuccess, getTestRankinglistSuccess } from "../store/actions/rankingActions";
import { rankingObjectType } from "../Container/Ranking";

export function* rankingSaga() {
    yield takeEvery(RankingType.getT20RankingList, getT20Ranking);
    yield takeEvery(RankingType.getOdiRankingList, getOdiRankingSaga);
    yield takeEvery(RankingType.getOdiRankingList, getTestRankingSaga);
}

export function* getT20Ranking() {
    console.log("this is the saga fucntion.");
    const apiObj = {
        method: "get",
        url: "/getT20Ranking"
    };
    try {
        const resp: {data: rankingObjectType[]} = yield call(axios.get, "/getT20Ranking") ;
        console.warn(resp.data);
        yield put(getT20RankingListSuccess(resp.data));
    } 
    catch (error) {
        console.warn("there is error in api ", error);
    }
}

export function* getOdiRankingSaga() {
    console.log("this is the saga fucntion.");
    const apiObj = {
        method: "get",
        url: "/getTestRanking"
    };
    try {
        const resp: {data: rankingObjectType[]} = yield call(axios.get, "/getOdiRanking") ;
        console.warn(resp.data);
        yield put(getOdiRankingListSuccess(resp.data));
    } 
    catch (error) {
        console.warn("there is error in api ", error);
    }
}

export function* getTestRankingSaga() {
    console.log("this is the saga fucntion.");
    const apiObj = {
        method: "get",
        url: "/getTestRanking"
    };
    try {
        const resp: {data: rankingObjectType[]} = yield call(axios.get, "/getTestRanking") ;
        console.warn(resp.data);
        yield put(getTestRankinglistSuccess(resp.data));
    } 
    catch (error) {
        console.warn("there is error in api ", error);
    }
}