export class Invoice {
  invoice_id: string;
  user_id: string;
  created_at: string;
  invoice_price: string;
  is_sent: boolean;
  constructor(
    invoice_id: string,
    user_id: string,
    created_at: string,
    invoice_price: string,
    is_sent: boolean
  ) {
    this.invoice_id = invoice_id;
    this.user_id = user_id;
    this.created_at = created_at;
    this.invoice_price = invoice_price;
    this.is_sent = is_sent;
  }
}
