import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { mdTheme } from './container/layout/layoutStyles';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import DashboardMain from "./container/dashboard/dashboard";
import OrdersMain from "./container/orders/orders";
import CustomersMain from "./container/customers/customers";
import ReportsMain from "./container/reports/reports";
import IntegrationsMain from "./container/integrations/integrations";
import UsersMain from './container/users/users';
import Login from './container/Auth/Login';
import PublicLayout from './container/layout/PublicLayout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<App />}>
          <Route path="/login" element={<Login />} />
        </Route>
    </Routes>
  </BrowserRouter>
);

