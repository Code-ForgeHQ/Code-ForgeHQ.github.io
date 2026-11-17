# AETHER

**A local-first digital operating environment by [Code Forge](https://github.com/Code-ForgeHQ).**

AETHER is a browser-based workspace designed as a cohesive software environment rather than a landing page with disconnected utilities. It brings project operations, local files, a code playground, notes, an encrypted personal vault, network utilities, a built-in command console, analytics, controls, and organization documentation into one responsive application.

> English is the primary interface language. Persian is available as a second language from the top bar.

## Live environment

https://code-forgehq.github.io/

## Product principles

- **One product, one responsive interface.** Desktop and mobile share the same application and data model, with navigation that adapts to the available screen.
- **Local-first.** Workspace data stays in the browser unless a user explicitly exports it.
- **No AI dependency.** AETHER does not require AI APIs, hosted models, API keys, or external service accounts.
- **Offline-capable shell.** The service worker caches the application shell for repeat visits.
- **Privacy-aware vault.** Vault entries are encrypted in the browser using Web Crypto (PBKDF2 key derivation and AES-GCM); the passphrase is not stored.
- **Open by design.** The project is static-host friendly and can be hosted on GitHub Pages.

## Included systems

| System | Purpose |
| --- | --- |
| AETHER Core | Navigation, command palette, preferences, notifications, and local state |
| Workspace | Tasks, priorities, completion status, and activity |
| Files | Local text-file creation, import, editing, export, and deletion |
| Studio | Notes and an isolated HTML/CSS/JavaScript preview sandbox |
| Vault | Encrypted private text records stored on this device |
| Network | URL inspection, SHA-256 hashing, UUID generation, and IPv4 subnet calculations |
| Terminal | A safe AETHER command console with built-in commands (not an operating-system shell) |
| Analytics | Local task and workspace metrics |
| Control | Runtime and preference controls |
| Code Forge | Organization overview, engineering principles, documentation, and official links |

## Run locally

No build step or package installation is required.

1. Clone this repository.
2. Open index.html in a modern browser, or serve the folder with a local static server.
3. For PWA installation, service workers, and Web Crypto, use HTTPS or localhost.

## Data and privacy

AETHER stores tasks, notes, preferences, and file records in the browser's local storage. Vault records are encrypted before being persisted. Browser storage is scoped to the browser origin and device; clearing site data can remove it. This initial release does not synchronize data across devices and does not upload content to a server.

Use the export features to keep your own backups. Do not treat this browser workspace as a replacement for a managed enterprise backup or a dedicated password manager.

## Security notes

- The Studio preview runs in a sandboxed iframe and is intended for code you choose to test.
- The Terminal is an application command console. It does not execute operating-system commands.
- Network utilities are local input-analysis tools. They do not scan remote hosts or send probes.
- Vault encryption depends on the strength and secrecy of the passphrase and the security of the device/browser.

## Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [User guide](./docs/USER_GUIDE.md)
- [Code Forge organization](./docs/ORGANIZATION.md)
- [Roadmap](./docs/ROADMAP.md)
- [Privacy model](./docs/PRIVACY.md)
- [Security policy](./SECURITY.md)
- [Contributing](./CONTRIBUTING.md)

## Contributing

See CONTRIBUTING.md before opening a pull request.

## License

MIT. See LICENSE.

---

## فارسی

AETHER یک محیط نرم‌افزاری یکپارچه و محلی‌محور است که برای استفاده در موبایل و دسکتاپ طراحی شده است. این پروژه شامل مدیریت کارها، فایل‌های محلی، فضای یادداشت و کدنویسی، گاوصندوق رمزگذاری‌شده، ابزارهای شبکه، کنسول فرمان داخلی، تحلیل داده و مستندات گروه Code Forge است.

این نسخه برای اجرا به API هوش مصنوعی، مدل خارجی یا کلید سرویس نیاز ندارد. اطلاعات در مرورگر همان دستگاه ذخیره می‌شوند و در این نسخه همگام‌سازی ابری وجود ندارد.