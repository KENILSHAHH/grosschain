import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, type AppKitNetwork } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import type { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

const projectId = (import.meta as any).env.VITE_WALLETCONNECT_PROJECT_ID as string | undefined

const metadata = {
  name: 'Grosschain',
  description: 'Subsecond crosschain protocol',
  url: 'https://grosschain.app',
  icons: ['https://avatars.githubusercontent.com/u/9919?s=200&v=4']
}

const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum]

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId: projectId ?? '',
  ssr: true
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId: projectId ?? '',
  metadata,
  features: {
    analytics: true
  }
})

export function AppKitProvider({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}


