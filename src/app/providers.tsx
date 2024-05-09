'use client'
import { ChakraProvider } from "@chakra-ui/react"
import { Layout } from "@/layout"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/clients/queryClient"


export function Providers({ children }: { children: JSX.Element }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider >
        <Layout>{children}</Layout>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
