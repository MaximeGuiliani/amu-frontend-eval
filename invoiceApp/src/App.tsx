import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import CreateCustomerPage from "./pages/CreateCustomerPage";
import HomePage from "./pages/HomePage";
import CreateInvoicePage from "./pages/CreateInvoicePage";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateCustomerPage />} />
            <Route path="/:idCustomer" element={<CustomerDetailsPage />} />
            <Route
              path="/:idcustomer/invoices/add"
              element={<CreateInvoicePage />}
            />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
