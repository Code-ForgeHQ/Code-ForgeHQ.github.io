<p align="center">
  <img src="assets/aether-banner.svg" alt="AETHER — Digital Operating Environment" width="100%">
</p>

<p align="center">
  <a href="https://code-forgehq.github.io/"><img src="https://img.shields.io/website?url=https%3A%2F%2Fcode-forgehq.github.io%2F&style=for-the-badge&label=LIVE%20ENVIRONMENT&color=ffffff&labelColor=111820" alt="Live environment"></a>
  <a href="https://github.com/Code-ForgeHQ/Code-ForgeHQ.github.io/actions/workflows/quality.yml"><img src="https://img.shields.io/github/actions/workflow/status/Code-ForgeHQ/Code-ForgeHQ.github.io/quality.yml?branch=main&style=for-the-badge&label=QUALITY" alt="Quality checks"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/Code-ForgeHQ/Code-ForgeHQ.github.io?style=for-the-badge&color=ffffff&labelColor=111820" alt="MIT license"></a>
  <a href="https://github.com/Code-ForgeHQ/Code-ForgeHQ.github.io/commits/main/"><img src="https://img.shields.io/github/last-commit/Code-ForgeHQ/Code-ForgeHQ.github.io?style=for-the-badge&color=ffffff&labelColor=111820" alt="Last commit"></a>
</p>

<p align="center">
  <a href="https://github.com/Code-ForgeHQ"><img src="https://img.shields.io/badge/BUILT%20BY-CODE%20FORGE-e8edf2?style=flat-square&labelColor=111820" alt="Built by Code Forge"></a>
  <img src="https://img.shields.io/badge/PLATFORM-WEB%20%2F%20PWA-9aa8b6?style=flat-square&labelColor=111820" alt="Web and PWA">
  <img src="https://img.shields.io/badge/INTERFACE-EN%20%2B%20FA-9aa8b6?style=flat-square&labelColor=111820" alt="English and Persian">
  <img src="https://img.shields.io/badge/DEPENDENCIES-ZERO-9aa8b6?style=flat-square&labelColor=111820" alt="No package dependencies">
</p>

<p align="center">
  <strong>One environment. Multiple systems. Your data stays on your device.</strong>
</p>

<p align="center">
  <a href="https://code-forgehq.github.io/">Launch AETHER</a> ·
  <a href="#systems">Explore systems</a> ·
  <a href="docs/ARCHITECTURE.md">Architecture</a> ·
  <a href="docs/USER_GUIDE.md">User guide</a> ·
  <a href="docs/ORGANIZATION.md">Code Forge</a>
</p>

---

## Overview

AETHER is a local-first digital operating environment built as one cohesive browser application. It combines workspace management, local files, a code studio, an encrypted vault, network utilities, an application command console, analytics, and system controls.

It is **not** a collection of unrelated landing-page widgets. Each system lives inside the same navigation model, visual language, localization layer, and local data environment.

| Principle | Implementation |
| --- | --- |
| One responsive product | Shared interface for phones, tablets, and desktop |
| Local-first | Workspace records stay in browser storage |
| No AI dependency | No model downloads, AI APIs, or API keys |
| No build chain | Static HTML, CSS, and JavaScript |
| Privacy-aware | Vault records encrypted with Web Crypto |
| Installable shell | PWA manifest and service-worker cache |
| Bilingual | English-first with Persian localization |

## Live environment

<p align="center">
  <a href="https://code-forgehq.github.io/"><img src="https://img.shields.io/badge/OPEN%20AETHER-LAUNCH%20WEB%20APP-f4f6f8?style=for-the-badge&labelColor=111820" alt="Launch AETHER"></a>
</p>

**Production URL:** https://code-forgehq.github.io/

The application is hosted with GitHub Pages. No account or server-side setup is required to explore the local workspace.

## Systems

<a name="systems"></a>

| System | Capabilities |
| --- | --- |
| **Overview** | Command deck, workspace snapshot, recent activity, quick access |
| **Workspace** | Task creation, priorities, status filters, completion tracking |
| **Files** | Local text-file creation, import, editing, and export |
| **Studio** | Autosaved notes and isolated HTML/CSS/JavaScript preview |
| **Vault** | Browser-side encrypted records using PBKDF2 and AES-GCM |
| **Network** | URL parsing, IPv4 subnet calculations, SHA-256, UUID generation |
| **Terminal** | Built-in AETHER commands; no operating-system shell access |
| **Analytics** | Metrics calculated from local workspace records |
| **Control** | Language, visual effects, data export, and import |
| **Code Forge** | Organization context, project documentation, and public links |

## Architecture

```mermaid
flowchart TB
    U["User · Desktop / Tablet / Phone"] --> UI["Responsive AETHER Interface"]
    UI --> CORE["Application Core"]
    CORE --> W["Workspace"]
    CORE --> F["Files"]
    CORE --> S["Studio"]
    CORE --> V["Vault"]
    CORE --> N["Network Tools"]
    CORE --> T["Command Console"]
    CORE --> A["Analytics & Control"]
    W --> STORE[("Browser Storage")]
    F --> STORE
    S --> STORE
    V --> CRYPTO["Web Crypto · PBKDF2 + AES-GCM"]
    CRYPTO --> STORE
    UI --> PWA["Service Worker · App Shell Cache"]
```

For implementation boundaries and data flows, see [Architecture](docs/ARCHITECTURE.md).

## Performance & compatibility

The interface uses a bounded canvas particle field, reduced-motion support, responsive layouts, and a lightweight static asset pipeline. The visual effects adapt to device capability rather than requiring a graphics-heavy framework.

- Modern Chromium, Firefox, and Safari-based browsers
- Desktop, tablet, and mobile layouts
- HTTPS recommended for service workers and Web Crypto
- Installable where the browser supports PWA installation

## Quick start

No package manager, compilation, API key, or model installation is required.

```bash
git clone https://github.com/Code-ForgeHQ/Code-ForgeHQ.github.io.git
cd Code-ForgeHQ.github.io
```

Open `index.html` in a browser for a basic preview. For full PWA and cryptography support, serve the directory from `localhost` or HTTPS.

## Data & privacy

AETHER does not currently synchronize data between devices. Tasks, notes, preferences, and file records are stored in the current browser profile. Vault entries are encrypted before persistence. Clearing browser data can remove local records.

> [!IMPORTANT]
> Export important workspace data regularly. Vault passphrases are not recoverable by AETHER. The Vault is a privacy-aware local feature, not a substitute for a professionally managed password manager.

See the [Privacy Model](docs/PRIVACY.md) and [Security Policy](SECURITY.md).

## Documentation

| Document | Description |
| --- | --- |
| [Architecture](docs/ARCHITECTURE.md) | Runtime layers, modules, persistence, and boundaries |
| [User Guide](docs/USER_GUIDE.md) | How to use each system |
| [Code Forge](docs/ORGANIZATION.md) | Organization overview and official public links |
| [Roadmap](docs/ROADMAP.md) | Delivered foundation and planned milestones |
| [Privacy Model](docs/PRIVACY.md) | Local data, encryption, and privacy boundaries |
| [Security Policy](SECURITY.md) | Responsible vulnerability reporting |
| [Contributing](CONTRIBUTING.md) | Engineering and pull-request guidelines |
| [Changelog](CHANGELOG.md) | Release history |

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) first, then open an issue or pull request with a focused description and reproducible details.

## License

AETHER is released under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Designed and developed by <a href="https://github.com/Code-ForgeHQ">Code Forge</a> · AETHER 1.0.0</sub>
</p>

<details>
  <summary>فارسی · درباره AETHER</summary>

  AETHER یک محیط نرم‌افزاری یکپارچه و محلی‌محور است. این پروژه مدیریت وظایف، فایل‌های محلی، استودیو کدنویسی، گاوصندوق رمزگذاری‌شده، ابزارهای شبکه، کنسول داخلی و تحلیل داده را در یک رابط واکنش‌گرا جمع می‌کند.

  نسخه فعلی به هوش مصنوعی، API خارجی، نصب مدل یا فرایند build نیاز ندارد. داده‌ها روی مرورگر همان دستگاه ذخیره می‌شوند و همگام‌سازی ابری در این نسخه ارائه نشده است.

  [ورود به AETHER](https://code-forgehq.github.io/) · [مستندات فارسی و انگلیسی](docs/USER_GUIDE.md)
</details>
