# AETHER Architecture

## Overview

AETHER is a static, client-side application. The repository is the deployment source, and the browser is the runtime. The first release deliberately avoids a backend so the application can run on GitHub Pages without credentials or external service dependencies.

## Layers

- **Presentation:** semantic HTML and responsive CSS; the same views adapt from desktop sidebar navigation to mobile drawer and bottom dock.
- **Application core:** route state, command palette, localization, modal system, toast notifications, and module dispatch.
- **Local persistence:** browser storage for preferences and workspace records; Web Crypto for encrypting Vault entries.
- **Offline shell:** a service worker caches the static application assets for repeat visits.

## Module boundaries

| Module | Responsibility | Persistence |
| --- | --- | --- |
| Workspace | Tasks and local activity | Browser local storage |
| Files | Text-file records and import/export | Browser local storage |
| Studio | Notes and playground source | Browser local storage |
| Vault | Private encrypted records | Encrypted browser local storage |
| Network | URL, hash, UUID, and subnet helpers | No remote persistence |
| Terminal | Built-in AETHER commands | In-memory session |
| Analytics | Metrics derived from local data | Computed at runtime |
| Control | Preferences and system status | Browser local storage |
| Code Forge | Organization and project documentation | Repository content |

## Navigation and localization

Routes are represented by hash fragments (#overview, #workspace, and so on). The primary locale is English (en); Persian (fa) is provided as a secondary locale. Locale selection updates document direction and is stored locally.

## Privacy and boundaries

AETHER is local-first, not cloud-synchronized. Browser storage is scoped to the browser origin and device. Users should export important records. The Studio preview is isolated in a sandboxed iframe. The Terminal intentionally supports only documented application commands and does not invoke a system shell.

## Future extension points

- A versioned import/export format for full workspace portability.
- Optional user-controlled synchronization adapter.
- Stronger automated tests for storage migrations and cryptographic record handling.
- Separate modules with explicit interfaces while preserving the no-build static deployment option.