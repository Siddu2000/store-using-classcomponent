import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./Components/Products/ProductList";
import ProductDetails from "./Components/Products/ProductDetails";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProductSlice from "./StoreSlices/ProductSlice";
import SearchSlice from "./StoreSlices/SearchSlice";

const store=configureStore({
  reducer:{
    product:ProductSlice,
    search:SearchSlice,
    },
})

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={AppRouter} />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
