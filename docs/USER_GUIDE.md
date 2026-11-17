# AETHER User Guide

## First launch

AETHER opens in English. Select FA in the top bar to switch to Persian. The language preference is saved in this browser. On phones, use the bottom dock for primary destinations and the menu button for the full module list. On desktop, use the persistent left navigation.

## Command palette

Press Ctrl+K (or Cmd+K on macOS) to search modules and jump directly to a destination. Press Escape to close it.

## Workspace

Create tasks, add context, select a priority, and mark tasks complete. Use All, Open, and Done filters to narrow the list. Tasks and activity records are local to this browser.

## Files

Create text files, import text-based files from your device, edit records, and export an individual file. The import flow reads file contents as text and skips files larger than 1 MB. The local file collection is not a cloud drive.

## Studio

The Notebook autosaves a selected note as you type. The code area supports HTML, CSS, and JavaScript tabs. Run Preview refreshes a sandboxed iframe; code runs inside that isolated preview and does not gain access to the parent application storage.

Use this feature only with code you trust. It is an experimentation area, not a secure malware-analysis sandbox.

## Vault

On first use, create a passphrase of at least eight characters. AETHER derives a key using PBKDF2 and encrypts each record with AES-GCM before saving it. Later, enter the same passphrase to unlock the records.

The passphrase is never saved. If it is lost, encrypted records cannot be recovered. If browser data is cleared, local vault records may be lost. Keep a separate secure backup of anything important. Do not reuse a weak or exposed password.

## Network

- URL Inspector parses an HTTP or HTTPS URL locally.
- IPv4 Subnet Calculator derives network, mask, broadcast, and host-count values from an IPv4 address and CIDR prefix.
- SHA-256 computes a digest of text using the browser's Web Crypto API.
- UUID creates a random version-4 identifier.

These tools do not send requests or scan external networks.

## Terminal

The Terminal understands a small built-in set of AETHER commands: help, about, modules, status, date, whoami, version, ls, tasks, open, lang, and clear. It is not a shell and cannot run operating-system commands.

## Analytics and Control

Analytics derives counts and completion percentages from your local workspace. Control contains language, visual effects, export, and import settings.

## Backups

Use Export workspace to download a JSON backup of tasks, files, notes, settings, and activity. Importing a backup replaces the current workspace records. Vault records are deliberately excluded because they are encrypted separately.

## Offline and installation

After a successful visit, the service worker caches the application shell. Browser support and storage policies vary. For installation, use your browser's Add to Home Screen or Install App option when available.