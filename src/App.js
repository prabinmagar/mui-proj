import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomersMain from './container/customers/customers';
import DashboardMain from './container/dashboard/dashboard';
import IntegrationsMain from './container/integrations/integrations';
import Layout from './container/layout/layout';
import OrdersMain from './container/orders/orders';
import ReportsMain from './container/reports/reports';
import UsersMain from './container/users/users';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Routes>
          <Route path="/" element = {<Layout />}>
            <Route path="/dashboard" element={<DashboardMain />} />
            <Route path = "/users" element = {<UsersMain />} />
            <Route path = "/orders" element = {<OrdersMain />} />
            <Route path = "/customers" element = {<CustomersMain />} />
            <Route path = "/reports" element = {<ReportsMain />} />
            <Route path = "/integrations" element = {<IntegrationsMain />} />
          </Route>
        </Routes>
          
    </div>
  );
}

export default App;
