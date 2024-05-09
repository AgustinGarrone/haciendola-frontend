"use client"
import React from "react"
import { useRouter } from "next/navigation"

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const isLoginPage = false

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div>
      {/* Aquí puedes agregar elementos de diseño compartidos, como encabezado, pie de página, etc. */}
      {children}
    </div>
  )
}
