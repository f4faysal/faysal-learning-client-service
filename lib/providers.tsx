"use client";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
