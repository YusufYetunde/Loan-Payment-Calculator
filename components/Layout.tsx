import React, { ReactNode } from "react";

import { Footer, Header, Meta, NoSSR, TopGradient } from "@/components";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <NoSSR>
      <div className="isolate bg-white mb-28 ">
        <Meta />
        <TopGradient />
        <Header />

        {children}
        <Footer/>
      </div>
    </NoSSR>
  );
}
