<h1 align="center">Populate All Contributors For Repository</h1>

<p align="center">
	Populates the .all-contributorsrc for a repository using all-contributors-for-repository.
	📋
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/populate-all-contributors-for-repository/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/populate-all-contributors-for-repository" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/populate-all-contributors-for-repository?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/populate-all-contributors-for-repository/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/populate-all-contributors-for-repository" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/populate-all-contributors-for-repository?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npx populate-all-contributors-for-repository --owner Owner --repository TestRepository
```

`populate-all-contributors-for-repository` will add each contributor automatically detected by [`all-contributors-for-repository`](https://github.com/JoshuaKGoldberg/all-contributors-for-repository) to your `.all-contributorsrc` file.

> [!NOTE]
> Contributors are added in series using `npx all-contributors-cli add`.
> See [all-contributors/cli#362](https://github.com/all-contributors/cli/issues/362) for a feature request to speed this up.

### Node.js API

Alternately, this can be called programmatically:

```shell
npm i populate-all-contributors-for-repository
```

```ts
import { populateAllContributorsForRepository } from "populate-all-contributors-for-repository";

await populateAllContributorsForRepository({
	owner: "JoshuaKGoldberg",
	repo: "create-typescript-app",
});
```

#### Options

`populateAllContributorsForRepository` takes in the same `RawAllContributorsForRepositoryOptions` options type as [`all-contributors-for-repository`](https://github.com/JoshuaKGoldberg/all-contributors-for-repository)'s `getAllContributorsForRepository`.
See [`all-contributors-for-repository` > Options](https://github.com/JoshuaKGoldberg/all-contributors-for-repository#options).

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 📋

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/populate-all-contributors-for-repository/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/populate-all-contributors-for-repository/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo engine](https://create.bingo).
