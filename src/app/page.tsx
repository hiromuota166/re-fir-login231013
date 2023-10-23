"use client";
import { useEffect, useState } from "react";
import { useAuth } from "./_lib/contents/auth"
import { login, logout } from "./_lib/auth";
import { Avatar, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  useEffect(() => {
    console.log(user);
    if (user != undefined && user != null) {
      console.log("ログイン成功！");
    }
  }, [user]);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };
  return (
    <div>
      {user === null && !waiting && <button onClick={signIn}>ログイン</button>}
      {user && <button onClick={logout}>ログアウト</button>}
    </div>
  );
}