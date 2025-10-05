import { useAccount } from 'wagmi'

export default function ConnectButton() {
  const { address, isConnected } = useAccount()

  if (!isConnected) {
    return (
      <button
        onClick={() => (window as any).open?.('walletConnectModal')}
        onMouseDown={() => (window as any).open?.('walletConnectModal')}
        style={{
          padding: '8px 12px',
          borderRadius: 8,
          border: '1px solid #ccc',
          background: 'white',
          cursor: 'pointer'
        }}
      >
        Connect Wallet
      </button>
    )
  }

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <span style={{ fontFamily: 'monospace' }}>
        {address?.slice(0, 6)}…{address?.slice(-4)}
      </span>
      <button
        onClick={() => (window as any).open?.('walletConnectModal')}
        style={{
          padding: '6px 10px',
          borderRadius: 6,
          border: '1px solid #eee',
          background: '#f6f6f6',
          cursor: 'pointer'
        }}
      >
        Manage
      </button>
    </div>
  )
}


