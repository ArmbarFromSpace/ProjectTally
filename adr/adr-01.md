# adr-01 Target device

## Status

Accepted

## Context

We will be deciding which devices this app should be aimed at.

## Decision

We will build this app to work for android phones and apple phones in portrait.

## Consequences

### Positive

- **Reduced Development Effort:** Focusing only on smartphones and portrait mode drastically cuts down on responsive UI layout complexity and testing permutations.
- **Faster Time-to-Market:** Shared codebases for iOS and Android allow the team to ship the MVP much quicker.

### Negative

- **Limited Device Reach:** Tablet users will experience a stretched UI or letterboxed view, which may alienate users who prefer larger screens.
- **Use Case Restrictions:** Features requiring a landscape view (e.g., data-heavy charts, video-first consumption) will be constrained by portrait dimensions.
