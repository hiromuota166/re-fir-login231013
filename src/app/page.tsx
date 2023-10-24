'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "./_lib/contents/auth";
import { login } from "./_lib/auth";
import { useRouter } from "next/navigation";
import { Button, Input } from "@chakra-ui/react";

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
    <div className="w-screen h-screen bg-green-300 block text-center">
      <div id="上部" className="w-screen h-3/5 flex justify-center items-center">
        <Image src="/crown.png" alt="logo" width={300} height={300} className="inline-block"/>
      </div>
      <div className="w-screen h-2/5 bg-gray-50 rounded-t-3xl flex">
        <div className="w-5/6 mx-auto flex flex-col justify-center items-center space-y-6">
        {!waiting && 
          <Button 
            width="100%"
            onClick={signIn}>
            Googleでログイン
          </Button>}
          <Input
            width="100%"
            isInvalid
            errorBorderColor='red.300'
            placeholder='メールアドレスでのログインを実装予定。'
          />
          <Button 
            width="100%"
            colorScheme='orange'>
            Login実装予定
          </Button>
        </div>
      </div>
    </div>
  );
}
