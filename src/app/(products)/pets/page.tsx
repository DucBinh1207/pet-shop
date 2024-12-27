"use client";

import dynamic from "next/dynamic";

const PageContent = dynamic(() => import("./_components/page-content"), {
  ssr: false,
});

export default function Page() {
  return <PageContent />;
}
