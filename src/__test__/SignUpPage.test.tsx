import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SignUpPage from "../pages/Login/SignUpPage";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import { Component } from 'react';
import { Toaster } from "react-hot-toast";
import exp from "constants";
import { getSignUp } from "../store/actions/authActions";
import rankingReducer from "../store/reducer/rankingReducer";

const mockStore = configureStore([]);
Object.defineProperty(global, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

const renderwithData = () => {
  const store = mockStore({
    ranking: {},
  });

  return render (
    <Provider store={store}>
      <BrowserRouter>
        <SignUpPage />
        <Toaster position='bottom-center'
    toastOptions={{
      // Define default options
      className: '',
      duration: 6000,
      style: {
        background: '#363636',
        color: '#fff',
      },
  
      // Default options for specific types
      success: {
        duration: 3000,
        iconTheme: {
          primary: 'green',
          secondary: 'black',
        },
      },
    }}/>
      </BrowserRouter>
    </Provider>
  );
};

describe("testing for signUp Page ", () => {
  it("render signUp page", () => {
    const { container } = renderwithData();
    // renderwithData().debug();
    // screen.debug();
    expect(container.querySelector("h1")).toHaveTextContent("Sign Up page");
  });

  it("when username is Invalid and submit th form", async () => {
    const component = renderwithData();
    fireEvent.click(screen.getByRole('button'));

    const toastText =  await screen.findByText(/userName length should be more than 5./i);
    // screen.debug();
    expect(toastText).toBeInTheDocument();
  });

  it("when email is Invalid and submit the form", async () => {
    const component = renderwithData();
    fireEvent.change(component.getByPlaceholderText("Enter User Name"), {target: {value: "tikam suvasiya"}});
    fireEvent.click(screen.getByRole('button'));

    const toastText =  await screen.findByText("enter the correct email id format.");
    expect(toastText).toBeInTheDocument();
  });

  it("when password is Invalid and submit the form", async () => {
    const component = renderwithData();
    fireEvent.change(component.getByPlaceholderText("Enter User Name"), {target: {value: "tikam suvasiya"}});
    fireEvent.change(component.getByPlaceholderText("Enter Email"), {target: {value: "xyz@gmail.com"}});
    fireEvent.click(screen.getByRole('button'));
    const toastText =  await screen.findByText("the length of password is greater than 5.");
    expect(toastText).toBeInTheDocument();
  });

  it("when form submitted successfully", async () => {
    // const component = renderwithData();
    const store = mockStore({
        ranking: {},
      });
      const actions = store.getActions();

      const component =  render (
        <Provider store={store}>
          <BrowserRouter>
            <SignUpPage />
            <Toaster position='bottom-center'
        toastOptions={{
          // Define default options
          className: '',
          duration: 6000,
          style: {
            background: '#363636',
            color: '#fff',
          },
      
          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}/>
          </BrowserRouter>
        </Provider>
      );

    fireEvent.change(component.getByPlaceholderText("Enter User Name"), {target: {value: "tikam suvasiya"}});
    fireEvent.change(component.getByPlaceholderText("Enter Email"), {target: {value: "xyz@gmail.com"}});
    fireEvent.change(component.getByPlaceholderText("Enter Password"), {target: {value: "password123"}});
    fireEvent.click(screen.getByRole('button'));
    component.debug();



    expect(actions).toEqual([getSignUp({userName: "tikam suvasiya", password: 'password123'})]);
    // expect(store.getState().)
    const toastText =  await screen.findByText("Congratulations you have Successfully registered.");
    expect(toastText).toBeInTheDocument();
  });

});