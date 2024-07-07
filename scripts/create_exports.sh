#!/bin/bash

# Clear the contents of index.ts
> index.ts

# Get the list of files in the utils folder
files=$(find utils -type f -name "*.ts")

# Loop through each file
for file in $files; do
  # Get the filename without the extension
  filename=$(basename "$file" .ts)

  # Export the function in index.ts
  echo "export * from './utils/$filename';" >> index.ts
done