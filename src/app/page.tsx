'use client';
import { useEffect, useState } from "react";
import { useAuth } from "./_lib/contents/auth";
import { login } from "./_lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const user = useAuth();
  const router = useRouter();
  const [waiting, setWaiting] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      router.push("/home"); // ログインしたらホームページにリダイレクト
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
      {!waiting && <button onClick={signIn}>ログイン</button>}
    </div>
  );
}
