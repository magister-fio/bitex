import StoreNavBar from "@/domains/store/shared/components/navbar";
import Warning from "@/domains/store/shared/components/warning";
import ShoppingCartProvider from "@/store/provider";

import StoreFooter from "../../domains/store/shared/components/footer/index";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gray-50">
      <ShoppingCartProvider>
        <StoreNavBar />
        {children}
        <StoreFooter />
        <Warning />
      </ShoppingCartProvider>
    </main>
  );
};

export default StoreLayout;
