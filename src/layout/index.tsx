"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoginPage } from "@/screen/login";
import { useAuth } from "@/hooks/useAuth";

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      if (isAuthenticated()) {
        setAuthState(true);
      } else {
        router.push("/login");
        setAuthState(false);
      }
    };

    checkAuthAndRedirect();
  }, [isAuthenticated, router]);

  return authState ? <div>{children}</div> : <LoginPage />;
};
