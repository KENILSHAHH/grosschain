# Grosschain

**Subsecond crosschain protocol implementation using Rust.**

### Overview

Grosschain is an experimental crosschain protocol focused on subsecond finality paths and low-latency message passing. It is implemented in Rust for performance, safety, and predictable concurrency.

### Goals

- Ultra-low latency crosschain messaging
- Deterministic validation and execution
- Memory- and CPU-efficient Rust implementation
- Clear separation of networking, consensus, and execution layers

### Status

Early-stage implementation. APIs and internals are subject to change.

### Getting Started (Rust backend)

Prerequisites:
- Rust toolchain (`rustup`, `cargo`, latest stable)

Build:
```bash
cargo build --release
```

Test:
```bash
cargo test
```

Run (example):
```bash
cargo run -- --help
```

### Frontend (React + WalletConnect)

The React app with WalletConnect (wagmi/viem) lives at the repository root.

Setup:
```bash
npm install
```

Configure environment:
Create `.env.local` in the repository root with:
```bash
VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

Run dev server:
```bash
npm run dev
```

Notes:
- Supported chains default to Ethereum `mainnet` and `sepolia`. Update `src/lib/wagmi.ts` as needed.
- Without `VITE_WALLETCONNECT_PROJECT_ID` set, WalletConnect will be disabled with a console warning.

### Contributing

Contributions are welcome. Please open an issue to discuss significant changes first.

### License

TBD. If you intend to use this code, please verify the license in this repository.
