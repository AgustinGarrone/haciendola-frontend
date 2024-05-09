'use client'
import { ChakraProvider } from "@chakra-ui/react"
import { Layout } from "@/layout"
import { QueryClient, QueryClientProvider } from "react-query"



export function Providers({ children }: { children: JSX.Element }) {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider >
        <Layout>{children}</Layout>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
