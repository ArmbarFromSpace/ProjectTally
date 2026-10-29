# adr-03 Styling

## Status

Accepted

## Context

We will be deciding how the styling of the application will look for the end product.

## Decision

We will be using TailwindCSS that we have learned from Web-Development-2 this semester to apply the overall style for the application.

## Consequences

### Positive

- **Increase Development Velocity:** CSS file no longer needed, all styling can be done inline within the TSX file and can reduce the need to multiple files.
- **Omission in Naming Convention:** Inline CSS with TailwindCSS reduces the need in naming certain styles to apply, all styles will be made for each selection.

### Negative

- **Maintainabiltiy and Readability:** Single files will become longer with more code cause of the inline CSS, causing the file to be bloated. 
- **Restrictions and Contraints:** As the CSS will be global across the application, some CSS could interfere with another styling from a different file. 
