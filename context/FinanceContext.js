import React, { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  return (
    <FinanceContext.Provider
      value={{
        userName, setUserName,
        accounts, setAccounts,
        transactions, setTransactions,
        budgets, setBudgets
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

