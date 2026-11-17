# Contributing to AETHER

Thanks for considering a contribution.

## Development guidelines

1. Keep the application dependency-light and static-host compatible.
2. Do not introduce AI APIs, remote model downloads, analytics trackers, or secret-bearing configuration.
3. Keep the English interface primary and provide Persian translations for new user-facing strings.
4. Test both narrow mobile layouts and wide desktop layouts.
5. Respect prefers-reduced-motion and keep animation work bounded.
6. Keep user data local by default. Any future synchronization feature must be explicit, documented, and opt-in.
7. Never describe the built-in command console as an operating-system shell.

## Pull request checklist

- [ ] The feature works on desktop and mobile.
- [ ] Keyboard navigation and visible focus states are preserved.
- [ ] User-facing strings are available in English and Persian.
- [ ] No third-party API or AI model is required.
- [ ] Local data behavior and export implications are documented.
- [ ] No secrets, credentials, or personal data are committed.

## Reporting issues

Use the repository issue tracker and include the browser, operating system, screen size, and steps to reproduce. Remove private content before attaching screenshots or logs.