# AETHER Privacy Model

## Default behavior

AETHER runs in the user's browser. It does not require an account and the initial release does not send workspace contents to a server. There is no telemetry, advertising script, remote AI endpoint, or cloud synchronization layer in the application.

## Local records

Tasks, notes, file entries, source snippets, settings, and activity are saved in browser local storage. This data is tied to the browser profile and site origin. It may be cleared by browser settings, private browsing sessions, device cleanup, or storage eviction.

## Vault records

Vault content is encrypted before it is persisted. The key is derived from the user's passphrase with PBKDF2 and a random salt; each record uses a random AES-GCM initialization vector. The passphrase and derived key are not written to local storage. The derived key remains in memory while the Vault is unlocked.

This does not protect against malware, a compromised browser, a compromised device, screen capture, weak passphrases, or someone using an already unlocked session. Lost passphrases cannot be recovered by the project.

## Backups

Workspace backups include ordinary local workspace records but exclude Vault entries. Vault export is not implemented in this release. Users should understand this boundary before relying on the Vault for critical information.

## External links

The Code Forge page contains links to public GitHub pages. Opening those links leaves the local AETHER application and is subject to the destination site's privacy policy.