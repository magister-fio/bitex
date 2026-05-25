"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";

import { shoppingCartStore } from "@/store/shoppingCart";

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={shoppingCartStore}>{children}</Provider>
);

export default ShoppingCartProvider;
