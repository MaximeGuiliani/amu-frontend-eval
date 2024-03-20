export class InvoiceData {
  user_id: string;
  invoice_price: string;
  is_paid: boolean;
  constructor(
    user_id: string,

    invoice_price: string,
    is_paid: boolean
  ) {
    this.user_id = user_id;

    this.invoice_price = invoice_price;
    this.is_paid = is_paid;
  }
}
