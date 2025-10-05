import { defaultWagmiConfig, createWeb3Modal } from '@web3modal/wagmi/react'
import { mainnet, sepolia } from 'wagmi/chains'
import { type Chain } from 'viem'

export const supportedChains: readonly [Chain, ...Chain[]] = [mainnet, sepolia]

export const walletConnectProjectId = (import.meta as any).env
  .VITE_WALLETCONNECT_PROJECT_ID as string | undefined

const appMetadata = {
  name: 'Grosschain',
  description: 'Subsecond crosschain protocol frontend',
  url: 'https://grosschain.local',
  icons: ['https://avatars.githubusercontent.com/u/9919?s=200&v=4']
}

export const wagmiConfig = defaultWagmiConfig({
  chains: supportedChains,
  projectId: walletConnectProjectId ?? '',
  metadata: appMetadata
})

export function setupWeb3Modal(): void {
  if (!walletConnectProjectId) {
    // Surface a clear warning in dev so developers add the required env var
    // This avoids runtime crashes while keeping WalletConnect optional until configured
    console.warn(
      '[WalletConnect] Missing VITE_WALLETCONNECT_PROJECT_ID. Add it to your .env.local to enable WalletConnect.'
    )
    return
  }

  createWeb3Modal({
    wagmiConfig,
    projectId: walletConnectProjectId,
    chains: supportedChains,
    enableAnalytics: false
  })
}


