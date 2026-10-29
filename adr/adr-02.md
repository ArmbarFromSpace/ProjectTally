# adr-02 Framework

## Status

Accepted

## Context

We will be deciding which framework will be used to run the application.

## Decision

We will be using React Native with expo and typescript as we have been learning that framework architecture during this semester.

## Consequences

### Positive

- **Reduced Development Effort:** No need to learn another framework or language in a short period of time potentially causing errors due to being rushed.
- **Faster Time-to-Market:** As we have been learning this framework so far for the semester we have a huge advantage in time to market and understanding the framework having already been exposed to it.

### Negative

- **Limited to native Expo Go libraries:** Unable to use custom native code. Strictly limited to libraries provided by Expo Go. This may limit the reach of the application on certain devices.
- **Performance restrictions:** React Native has a limitation in terms of performance compared to native applications. This may cause issues with the application's performance on certain devices or under certain conditions. 
