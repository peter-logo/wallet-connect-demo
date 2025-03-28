import { Invoice } from "@/types";

export const invoiceData: Invoice = {
  invoiceId: "#INV-001",
  merchant: {
    fullName: "John Doe",
    businessName: "John Doe Inc.",
    address: "123 Main St. Suite 330, Boston, MA 02111-1307",
  },
  customer: {
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    address: "456 Elm St. Apt. 200, New York, NY 10011",
  },
  items: [
    {
      id: "item1",
      name: "Widget A",
      description: "This is Widget A.",
      quantity: 2,
      price: 10.0,
      total: 20,
    },
    {
      id: "item2",
      name: "Widget B",
      description: "This is Widget B.",
      quantity: 1,
      price: 20.0,
      total: 20,
    },
    {
      id: "item3",
      name: "Widget C",
      description: "This is Widget C.",
      quantity: 3,
      price: 15.0,
      total: 45,
    },
  ],
  currency: "usd",
  totalAmount: 85.0,
  issuedAt: new Date("2022-01-01T12:00:00Z"),
  dueAt: new Date("2022-01-31T12:00:00Z"),
};
