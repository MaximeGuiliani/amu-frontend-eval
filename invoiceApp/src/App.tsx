import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import CreateCustomerPage from "./pages/CreateCustomerPage";
import HomePage from "./pages/HomePage";
import CreateInvoicePage from "./pages/CreateInvoicePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreateCustomerPage />} />
          <Route path="/:idCustomer" element={<CustomerDetailsPage />} />
          <Route
            path="/:idcustomer/invoice/add"
            element={<CreateInvoicePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
