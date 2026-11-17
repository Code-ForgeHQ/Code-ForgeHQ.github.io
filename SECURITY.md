# Security Policy

<p align="right"><a href="README.md">← Project home</a></p>

![Security scope](https://img.shields.io/badge/security-browser%20application-9aa8b6?style=flat-square&labelColor=111820)

## Reporting a vulnerability

Please do not publish exploitable details, credentials, access tokens, private user data, or sensitive logs in a public issue.

Use GitHub's private vulnerability reporting feature for this repository when available. If private reporting is unavailable, open a minimal public issue requesting a private contact route without including exploit details.

## Supported scope

Security reports are especially useful for:

- Cross-site scripting or unsafe rendering in application views
- Vault encryption, key handling, or record-integrity issues
- Unsafe iframe preview behavior
- Unexpected data disclosure or backup handling
- Service-worker cache or update behavior

## Security boundaries

- AETHER is a static client-side application; it has no remote account or authorization service.
- Vault entries are encrypted locally with Web Crypto.
- Browser or device compromise is outside the protection this application can guarantee.
- The Terminal is a documented application command console, not an operating-system shell.
- Network tools perform local parsing and calculations; they do not probe remote systems.

## Disclosure

Please allow maintainers time to investigate and prepare a fix before sharing technical details publicly. Do not test against other people's devices, accounts, or data.
