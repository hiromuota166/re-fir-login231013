"use client";
import { logout } from "@/app/(portal)/_lib/auth";
import { useAuth } from "@/app/(portal)/_lib/contents/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/"); // ログアウトしたらログインページにリダイレクト
    }
  }, [user]);

  const signOut = () => {
    logout();
  };

  return <div>{user && <button onClick={signOut}>ログアウト</button>}</div>;
}
