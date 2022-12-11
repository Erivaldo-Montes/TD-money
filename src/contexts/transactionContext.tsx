import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionContextProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3000/transactions");

    if (query) {
      url.searchParams.append("q", query);
    }

    const response = await fetch(url);
    const transactions = await response.json();
    setTransaction(transactions);
  }
  useEffect(() => {
    fetchTransactions();
  });
  return (
    <TransactionsContext.Provider value={{ fetchTransactions, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
