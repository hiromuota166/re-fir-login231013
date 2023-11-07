"use client";
import Logout from "@/app/(auth)/_components/Logout";
import Header from "../../_components/header";
export default function Home() {
  return (
    <div>
      <Header name="ホーム"/>
      <Logout />
    </div>
  );
}
