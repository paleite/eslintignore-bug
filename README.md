# Steps to reproduce

```sh
npm install # Install modules
npm run lint-absolute # Starts ESLint from the git root folder and uses the ignore-file from the git root folder
npm run lint-relative # Starts ESLint from a subfolder and uses the ignore-file from the git root folder
```

# Expected

- ✅ I expected ESLint to only lint files in the folder `package-a/`
- ✅ I expected `.eslintrc.js` to apply the same way, regardless of which folder I was currently in
- ✅ I expected `.list-of-ignored-files` to apply on the same files, regardless of which folder I was currently in

# Actual result

- ✅ I expected ESLint to only lint files in the folder `package-a/`
- ✅ `.eslintrc.js` applied the same way, regardless of which folder I was currently in
- ❌ `.list-of-ignored-files` **DID NOT** apply on the same files, regardless of which folder I was currently in
