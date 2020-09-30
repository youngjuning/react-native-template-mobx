# :space_invader: React Native Template Mobx

<p>
  <a href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000" target="_blank" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="MIT License" src="https://img.shields.io/maintenance/yes/2020.svg" target="_blank" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="MIT License" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Clean and minimalist React Native template for a quick start with TypeScript and Mobx.

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template
- Minimal additional dependencies
- Integrated Mobx by default
- Recommended best practices

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template @youngjuning/react-native-template-typescript
```

### Usage with older versions of React Native

> If you use the old version with RN，Please choose the react-native-template-typescript as your template.

#### e.g. `react-native@0.62.x`

```sh
npx react-native init MyApp --template react-native-template-typescript@6.4.*
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native  	| Template  	|
|---	            |---	        |
| 0.63  	        | 6.5.*       |
| 0.62  	        | 6.4.*       |
| 0.61  	        | 6.3.*       |
| 0.60  	        | 6.2.*       |

### Note on the legacy CLI

There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. 

If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

## :bookmark: License

This project is [MIT](LICENSE) licensed.
