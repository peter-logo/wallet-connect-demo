export interface Merchant {
  fullName: string;
  businessName: string;
  address: string;
}

export interface Customer {
  fullName: string;
  email: string;
  address: string;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  total: number;
}

export type FiatCurrency = "usd" | "aud" | "ngn";

export interface Invoice {
  invoiceId: string;
  merchant: Merchant;
  customer: Customer;
  items: Item[];
  currency: FiatCurrency;
  totalAmount: number;
  issuedAt: Date;
  dueAt: Date;
}
