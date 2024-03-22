import { describe, expect, it } from "vitest";
import {
  getAllCustomers,
  getCustomerById,
  getCustomerInvoices,
  createCustomer,
  createInvoice,
  updateInvoiceStatus,
} from "../src/api/http"; // Remplacer 'pathname' par le chemin réel du fichier
import { InvoiceData } from "../src/types/InvoiceData";

describe("Customer API Tests", () => {


    
  it("should fetch all customers", async () => {
    const customers = await getAllCustomers();
    expect(customers).toBeDefined();
  });

  it("should fetch a customer by id", async () => {
    const customer = await getCustomerById("48");
    expect(customer).toBeDefined();
  });

  it("should fetch customer invoices", async () => {
    const invoices = await getCustomerInvoices("123");
    expect(invoices).toBeDefined();
  });

  it("should create a customer", async () => {
    const newCustomer = { name: "John Doe", email: "johndoe@example.com" };
    const createdCustomer = await createCustomer(newCustomer);
    expect(createdCustomer).toBeDefined();
  });

  it("should create an invoice", async () => {
    const newInvoice: InvoiceData = new InvoiceData("48", "13", false);
    const createdInvoice = await createInvoice(newInvoice);
    expect(createdInvoice).toBeDefined();
  });

  it("should update invoice status", async () => {
    const updatedInvoice = await updateInvoiceStatus("48");
    expect(updatedInvoice).toBeDefined();
  });
});
