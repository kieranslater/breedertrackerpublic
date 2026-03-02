# DogSeasons GitHub Pages site

This is a simple static site for:

- Home page
- Support page
- Privacy policy page

It is ready to upload to a separate public GitHub repository and publish with GitHub Pages.

## Before publishing

Edit `assets/js/site-config.js` and update:

- `supportEmail`
- `iosAppStoreUrl`
- `macAppStoreUrl`
- `appName` or `appStoreName` if needed
- `privacyEffectiveDate`

## Suggested repo setup

- Create a new **public** GitHub repository, for example `breedertrackerpublic`
- Upload the contents of this folder to the repository root
- In GitHub, go to **Settings -> Pages**
- Set the source to **Deploy from a branch**
- Choose the `master` branch and `/ (root)` folder
- Save

GitHub Pages will then publish the site at a URL similar to:

`https://kieranslater.github.io/breedertrackerpublic/`

## App Store Connect

Use:

- `https://kieranslater.github.io/breedertrackerpublic/support/` for **Support URL**
- `https://kieranslater.github.io/breedertrackerpublic/privacy/` for **Privacy Policy URL**

You can use the home page URL as your general product or marketing page if you want one.
