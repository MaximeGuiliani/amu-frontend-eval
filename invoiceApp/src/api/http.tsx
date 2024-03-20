import { CustomerData } from "../types/CustomerData";
import { InvoiceData } from "../types/InvoiceData";

const SUPABASE_URL_CUSTOMERS =
  "https://frdixacpxwhtyrnvmbhp.supabase.co/rest/v1/Customers";
const SUPABASE_URL_INVOICES =
  "https://frdixacpxwhtyrnvmbhp.supabase.co/rest/v1/Invoices";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZGl4YWNweHdodHlybnZtYmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NTUwNDAsImV4cCI6MjAyNDUzMTA0MH0.52ISd5WJASST2YlF-pFXrEOsv9cNGxszhTabN7W4qtA";

/**
 * Permet de modifier le statut de la tâche dans l'API
 * @param {number} id
 * @param {boolean} status
 * @returns Promise<{id: number, done: boolean, text: string}>
 */
const getAllCustomers = async () => {
  const response = await fetch(`${SUPABASE_URL_CUSTOMERS}?select=*&limit=100`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apiKey: SUPABASE_API_KEY,
      Prefer: "return=representation",
    },
  });
  const data = await response.json();
  return data; // Return the array of customers
};

// get customer by user_id
const getCustomerById = async (id: string) => {
  const response = await fetch(
    `${SUPABASE_URL_CUSTOMERS}?user_id=eq.${id}&select=*&limit=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation",
      },
    }
  );
  const data = await response.json();
  return data[0]; // Return the first item in the array
};

const getCustomerInvoices = async (id: string) => {
  const response = await fetch(
    `${SUPABASE_URL_INVOICES}?user_id=eq.${id}&select=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation",
      },
    }
  );
  const data = await response.json();
  return data; // Return the first item in the array
};
const createCustomer = async (customerData: CustomerData) => {
  const response = await fetch(SUPABASE_URL_CUSTOMERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apiKey: SUPABASE_API_KEY,
      Prefer: "return=representation",
    },
    body: JSON.stringify(customerData),
  });
  const data = await response.json();
  return data;
};

const createInvoice = async (invoiceData: InvoiceData) => {
  const response = await fetch(SUPABASE_URL_INVOICES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apiKey: SUPABASE_API_KEY,
      Prefer: "return=representation",
    },
    body: JSON.stringify(invoiceData),
  });
  const data = await response.json();
  return data;
};

const updateInvoiceStatus = async (id: string) => {
  const response = await fetch(`${SUPABASE_URL_INVOICES}?invoice_id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apiKey: SUPABASE_API_KEY,
      Prefer: "return=representation",
    },
    body: JSON.stringify({ is_paid: true }),
  });
  const data = await response.json();
  return data[0]; // Return the updated invoice data
};

export default getAllCustomers;
export {
  getAllCustomers,
  getCustomerById,
  getCustomerInvoices,
  createCustomer,
  createInvoice,
  updateInvoiceStatus
};
