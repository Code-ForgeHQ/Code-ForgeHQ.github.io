# AETHER Privacy Model

<p align="right"><a href="../README.md">← Project home</a></p>

![Data model](https://img.shields.io/badge/data%20model-local--first-ffffff?style=flat-square&labelColor=111820)
![Telemetry](https://img.shields.io/badge/telemetry-none-9aa8b6?style=flat-square&labelColor=111820)

## At a glance

- No account is required.
- Workspace data is stored in the current browser profile.
- The application does not include analytics trackers or advertising scripts.
- The current release does not upload workspace contents or synchronize devices.
- Vault records are encrypted before they are persisted.

## Data inventory

| Data category | Location | Included in workspace export |
| --- | --- | --- |
| Tasks and activity | Browser localStorage | Yes |
| Files and notes | Browser localStorage | Yes |
| Studio source | Browser localStorage | Yes |
| Preferences | Browser localStorage | Yes |
| Vault entries | Encrypted browser localStorage values | No |

## Vault cryptography

Vault keys are derived from a user-supplied passphrase with PBKDF2 and a random salt. Individual records are encrypted with AES-GCM and a random initialization vector. The passphrase and derived key are not written to localStorage.

This protects stored records against casual inspection of the raw local values. It does not protect against a compromised device, malicious browser extensions, an unlocked session, screen capture, or a weak passphrase.

## Retention and deletion

AETHER stores data in the browser origin's storage. Users can remove it through browser site-data controls, but doing so may permanently remove local workspace and Vault records. Export important workspace records before clearing site data.

## External destinations

The Code Forge module links to public GitHub pages. Opening those links leaves the AETHER application and is subject to the destination site's own privacy practices.

## Future changes

Any future synchronization or remote integration must be opt-in, documented, and accompanied by an updated data-flow and retention description.
