import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@/redux/store";
import { History } from "@/helpers";

import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Page1 from "@/pages/Page1";
import Page2 from "@/pages/Page2";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter history={History} basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route >
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
