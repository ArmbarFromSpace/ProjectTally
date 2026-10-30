# adr-02 Storage

## Status

Accepted

## Context

We will be deciding which type of storage we will be using and wether or not we need a database on a server storing sensitive data. 

## Decision

We will not be using a database on a server as the data we need to store for this application is not sensitive and can be stored locally and unencrypted on the device.

## Consequences

### Positive

- **No need for a server:** No need to maintain a server, which reduces the cost and complexity of the application.
- **No need for encryption:** No need to encrypt the data, which reduces the complexity of the application and improves performance.

### Negative

- **No backup:** If the device is lost or damaged, the data will be lost. However, this is mitigated by the fact that the data is not sensitive and can be easily recreated.
- **No scalability:** If the application grows and more data needs to be stored, it will not be possible to scale the application by adding more storage to the device beyond hardware limits. However, this is not a concern for this application as the data is not expected to grow significantly.
