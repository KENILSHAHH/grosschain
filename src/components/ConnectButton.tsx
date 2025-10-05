import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react'

export default function ConnectButton() {
  const { isConnected, address } = useAccount()
  const { open } = useAppKit()

  return (
    <button
      onClick={() => open()}
      style={{
        padding: '8px 12px',
        borderRadius: 8,
        border: '1px solid #ccc',
        background: 'white',
        cursor: 'pointer'
      }}
    >
      {isConnected ? `Connected: ${address?.slice(0, 6)}…${address?.slice(-4)}` : 'Connect Wallet'}
    </button>
  )
}


