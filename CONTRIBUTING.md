# Contribution guide

Everyone is more than welcome to contribute to this project! That's what open source is all about!

In the following we try to provide some help and guidance on how to participate, contribute and develop on the project.

**Table of content:**

- [1. Raising an issue or feature request](#1-raising-an-issue-or-feature-request)
- [2. Project Setup \& Development](#2-project-setup--development)
  - [2.1 Recommended IDE Setup](#21-recommended-ide-setup)
    - [2.1.1 Type Support for `.vue` Imports in TypeScript](#211-type-support-for-vue-imports-in-typescript)
  - [2.2 Daily-used commands](#22-daily-used-commands)
    - [2.2.1 Installing all dependencies](#221-installing-all-dependencies)
    - [2.2.2 Compile and Hot-Reload for Development](#222-compile-and-hot-reload-for-development)
    - [2.2.3 Lint with ESLint](#223-lint-with-eslint)
    - [2.2.4 Type-Check, Compile and Minify for Production](#224-type-check-compile-and-minify-for-production)
  - [2.3 Usage of mkcert](#23-usage-of-mkcert)
  - [2.4 Sandbox environment](#24-sandbox-environment)
  - [2.5 Git workflow](#25-git-workflow)
    - [2.5.1 Releases \& Versioning](#251-releases--versioning)
    - [2.5.2 Patching older Release](#252-patching-older-release)

## 1. Raising an issue or feature request

The easiest way to contribute to the project is to simply use it!

If you find any issues or missing features while using the project, feel free to create a [GitHub Issue](https://github.com/florianrusch/vue3-quagga2/issues) in this project and describe what you found or what you need. To help you with this as well, we provide several templates to help and guide you through the issue creation.

## 2. Project Setup & Development

If you like to get your hands dirty, the following subsections provide some information and instructions for the general setup of your local development environment.

### 2.1 Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

#### 2.1.1 Type Support for `.vue` Imports in TypeScript

TypeScript cannot handle type information for `.vue` imports by default, so we replaced the `tsc` CLI with `vue-tsc` for type checking. In editors, e.g. for VisualStudio Code we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

### 2.2 Daily-used commands

#### 2.2.1 Installing all dependencies

```sh
npm install
```

#### 2.2.2 Compile and Hot-Reload for Development

> Please be aware that some browser allow access to the cameras only if the website uses http**s**.
> Therefor we are using [mkcert](https://github.com/FiloSottile/mkcert). See [this chapter](#23-usage-of-mkcert) for more details.

```sh
npm run dev
```

Or if you want to access the application from you mobile device while developing:

```sh
npm run dev-network
```

#### 2.2.3 Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

#### 2.2.4 Type-Check, Compile and Minify for Production

```sh
npm run build
```

### 2.3 Usage of mkcert

As some browser only allow the camera access on websites which were transfererd via http**s** we need for development purposes also http**s**. To make it very simply for the developer we are using [mkcert](https://github.com/FiloSottile/mkcert) which was made to use one local Certificate Authority (CA) for all local development projects.

As we are using vite for hosting our local development server we are also using the [vite-plugin-mkcert](https://github.com/liuweiGL/vite-plugin-mkcert) to configure and setup mkcert.

As the project is mostly focusing on mobile application we would also need to allow/accept the local self-signed certificates on our mobile devices. The vite-plugin we are using provides a good guide how to do this: <https://github.com/liuweiGL/vite-plugin-mkcert#mobile-devices>

### 2.4 Sandbox environment

A sandbox environment has been set up for development purposes. You can find it in the [`/sandbox`](./sandbox/) folder and in the [`index.html`](./index.html).

### 2.5 Git workflow

The development is orientated on GitHub flow. Therefor every Sourcecode contribution needs to be provided through a [GitHub Pull-Request](https://github.com/florianrusch/vue3-quagga2/pulls).

#### 2.5.1 Releases & Versioning

Release will be made by tagging a specific commit on the `main` branch. For the versioning we are using the [Semantic Versioning schema](https://semver.org/):

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
> 1. MAJOR version when you make incompatible API changes
> 2. MINOR version when you add functionality in a backwards compatible manner
> 3. PATCH version when you make backwards compatible bug fixes

#### 2.5.2 Patching older Release

Sometimes it's happening that a security issues appears in an older Release. The plan for fixing such kind of issues would look like following:

1. Identify the commit hash for the release you want to patch:

   ```shell
   git log --tags --simplify-by-decoration --pretty="format:%ci %d" | grep "tag: v1.3.0" | head -1
   ```

   This command will output the commit hash for the release tag v1.3.0. Replace v1.3.0 with the actual tag name for the release you want to patch.

2. Create a new branch from the commit hash: `git checkout -b patch-v1.3 <commit hash>`
3. Make the necessary changes to the code to fix the issue.
4. Commit the changes: `git commit -m "Fix issue in release 1.3.0"`
5. Push the changes to the patch branch: `git push origin patch-v1.3`
6. Create a new release from the patch branch:
   - On the GitHub web interface, go to the repository's Releases tab.
   - Click on the "Draft a new release" button.
   - In the "Tag version" field, enter a new version number for the patch release (e.g., v1.3.1).
   - In the "Target" field, select the patch branch you just created.
   - Fill in any additional release information, such as a release title and description.
   - Click on the "Publish release" button to create the new release.
