# Security Policy

## Reporting

Please do not publish exploitable security details, credentials, tokens, or private user data in a public issue. Report suspected vulnerabilities through the private vulnerability reporting option on the GitHub repository when available.

## Scope and limitations

AETHER is a static, browser-local application. It does not provide a remote account system, cloud synchronization, or a server-side trust boundary. Vault entries are encrypted locally using Web Crypto, but browser/device compromise, weak passphrases, and loss of local browser data remain outside the protection this application can guarantee.

The Terminal is a simulated application console and does not execute operating-system commands. Network utilities do not probe remote systems.