# Contributing to AETHER

<p align="right"><a href="README.md">← Project home</a></p>

![Contributions](https://img.shields.io/badge/contributions-welcome-ffffff?style=flat-square&labelColor=111820)
![Code style](https://img.shields.io/badge/stack-vanilla%20web-9aa8b6?style=flat-square&labelColor=111820)

Thank you for considering a contribution to AETHER.

## Engineering principles

1. Keep the project static-host compatible and dependency-light.
2. Do not add AI APIs, hosted models, analytics trackers, or secret-bearing configuration.
3. Keep English as the primary interface language and add Persian translations for new user-facing strings.
4. Test narrow mobile layouts and wide desktop layouts.
5. Respect `prefers-reduced-motion` and bound continuous animation work.
6. Keep user data local by default. Any future synchronization must be explicit, optional, and documented.
7. Keep the Terminal limited to documented AETHER commands; never imply it is a system shell.
8. Document privacy and security implications for new storage or cryptographic behavior.

## Development

No package installation or build step is required. Clone the repository and open `index.html` for a basic preview. Use localhost or HTTPS to test service-worker and Web Crypto behavior.

## Pull request checklist

- [ ] The feature works on desktop and mobile.
- [ ] Keyboard focus and touch targets remain usable.
- [ ] New user-facing strings are translated into English and Persian.
- [ ] No external API, model, or runtime dependency was introduced.
- [ ] Data storage, export, and deletion behavior are documented.
- [ ] Reduced-motion behavior is respected.
- [ ] No credentials, personal data, or generated build artifacts are committed.
- [ ] The GitHub Actions quality workflow passes.

## Bug reports

Include browser and version, operating system, screen size, expected behavior, actual behavior, and reproducible steps. Remove personal data and credentials from screenshots and logs.

## Feature proposals

Explain the user problem, the proposed capability, mobile and desktop behavior, and any privacy or network implications.
