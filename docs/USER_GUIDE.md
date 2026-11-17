# AETHER User Guide

<p align="right"><a href="../README.md">← Project home</a></p>

![Guide](https://img.shields.io/badge/documentation-user%20guide-9aa8b6?style=flat-square&labelColor=111820)

## Contents

- [First launch](#first-launch)
- [Navigation and command palette](#navigation-and-command-palette)
- [Workspace](#workspace)
- [Files](#files)
- [Studio](#studio)
- [Vault](#vault)
- [Network](#network)
- [Terminal](#terminal)
- [Analytics and Control](#analytics-and-control)
- [Backups](#backups)
- [Offline use and installation](#offline-use-and-installation)

## First launch

AETHER starts in English. Select **FA** in the top bar to switch to Persian. The preference is saved in this browser.

| Device | Navigation |
| --- | --- |
| Desktop | Persistent sidebar |
| Phone | Bottom navigation dock and slide-out module menu |
| Tablet | Responsive layout based on available width |

## Navigation and command palette

Press `Ctrl + K` (or `Cmd + K` on macOS) to open the command palette. Search for a module, use the keyboard to navigate, and press Enter to open it. Press Escape to close the overlay.

## Workspace

Create tasks with a title, optional context, and priority. Use **All**, **Open**, and **Done** filters to review progress. Mark tasks complete or edit and delete them from the task row.

All task records are local to this browser.

## Files

Create text-based records, import text files from your device, edit their contents, and export individual files. The import flow reads content as text and skips files larger than 1 MB.

> [!TIP]
> Use descriptive file extensions such as `.md`, `.txt`, `.json`, and `.html` to keep your local collection organized.

AETHER Files is a local text workspace, not a synchronized cloud drive or a general-purpose file-system browser.

## Studio

Studio contains two areas:

- **Notebook:** create and edit notes; the selected note autosaves locally.
- **Code Studio:** switch between HTML, CSS, and JavaScript, then run the preview.

The preview is rendered in a sandboxed iframe. It is an experimentation space for code you choose to run, not a secure malware-analysis environment.

## Vault

On first use, create a passphrase with at least eight characters. AETHER derives a key with PBKDF2 and encrypts each record using AES-GCM before saving it.

<details>
  <summary>Vault security and recovery details</summary>

  - The passphrase is not saved.
  - The derived key stays in memory while the Vault is unlocked.
  - Losing the passphrase means encrypted records cannot be recovered.
  - Clearing browser storage can permanently remove local Vault records.
  - A compromised or unlocked device can expose information.
  - Workspace JSON exports deliberately exclude Vault records.

</details>

Use a strong, unique passphrase and keep separate backups of important information.

## Network

| Tool | Function | Remote activity |
| --- | --- | --- |
| URL Inspector | Parses HTTP and HTTPS URL components | None |
| IPv4 Subnet Calculator | Calculates network, mask, broadcast, and host counts | None |
| SHA-256 | Hashes text using Web Crypto | None |
| UUID | Generates a random version-4 identifier | None |

These are local utilities. They do not scan, probe, or connect to remote hosts.

## Terminal

The built-in console supports a limited set of AETHER commands:

```text
help · about · modules · status · date · whoami
version · ls · tasks · open · lang · clear
```

> [!WARNING]
> This is not an operating-system shell. It cannot run system commands or launch external programs.

## Analytics and Control

Analytics derives task counts and completion metrics from the current local workspace. Control contains language, particle and glow preferences, and workspace data export/import actions.

## Backups

Use **Export workspace** to download a JSON backup containing tasks, files, notes, settings, and activity. Importing a backup replaces the current workspace records.

Vault records are excluded because they are stored separately in encrypted form.

## Offline use and installation

After the first successful visit, the service worker caches the application shell. Availability depends on browser storage and service-worker support.

For installation, use the browser's **Install App** or **Add to Home Screen** command when offered. HTTPS or localhost is required for service workers and Web Crypto in supported browsers.
