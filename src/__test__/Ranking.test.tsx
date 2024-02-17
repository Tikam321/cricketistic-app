import { createEvent, fireEvent, getByText, render, screen } from '@testing-library/react';
import Ranking from '../Container/Ranking';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';
import configureStore from 'redux-mock-store';
import { Component } from 'react';

const withoutData  = {
  t20RankingList: [],
  odiRankingList: [],
  testRankingList: []
}

const withData = {
  t20RankingList: [{
    countryName: "India",
    id: 1,
    position: 1,
    rankingPoints: 1
}],
odiRankingList: [{
    countryName: "India",
    id: 1,
    position: 1,
    rankingPoints: 1
}],
testRankingList: [{
    countryName: "India",
    id: 1,
    position: 1,
    rankingPoints: 1
}],
}

// const rankingReducer = {
//   t20RankingList: [],
//   odiRankingList: [],
//   testRankingList: []
// }

const mockStore = configureStore([]);

const renderwithData = () => {
  const store = mockStore({
    ranking: withData
   });
    return render( <Provider store={store}>
     <BrowserRouter>
     <Ranking />
     </BrowserRouter>
   </Provider>);
}

test("match snapshot without data DOM", () => {
  const tree = renderwithData();
  expect(tree).toMatchSnapshot();
});

test ("render the ranking page  without data", async () => {
  const store = mockStore({
    ranking: {}
   });
   
    render( <Provider store={store}>
     <BrowserRouter>
     <Ranking />
     </BrowserRouter>
   </Provider>);
});

test ("render the ranking page  with data", async () => {
  const store = mockStore({
    ranking: withData
   });
   
    render( <Provider store={store}>
     <BrowserRouter>
     <Ranking />
     </BrowserRouter>
   </Provider>);
});

test('fireing click event for different format ranking ', async () => {
  //given
  const store1 = mockStore({
   ranking: withData
  });
  
   render( <Provider store={store1}>
    <BrowserRouter>
    <Ranking />
    </BrowserRouter>
  </Provider>);

   expect(screen.getByRole('title')).toHaveTextContent("CC Cricket Ranking - Men's Batting");
   fireEvent.click(screen.getByTestId("odiButton"));
   fireEvent.click(screen.getByTestId("testButton"));
   fireEvent.click(screen.getByTestId("t20Button"));
});

test("onmouseover for tabledata", async () => {
  const component =  renderwithData();
  const createEvent1 =  createEvent.mouseMove(component.getByTestId('tableData'), {
    clientX: 595,
    clientY: 535,
  })
  fireEvent(component.getByTestId('tableData'), createEvent1);
  component.debug();
});