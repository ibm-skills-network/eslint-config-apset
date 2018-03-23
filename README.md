# eslint-config-apset
Node Style Guide for PET.

## Install

Obtain your Artifactory API key at [here](https://na.artifactory.swg-devops.com/artifactory/webapp/#/home)

```bash
curl -u<USERNAME>:<API_KEY> https://na.artifactory.swg-devops.com/artifactory/api/npm/apset-npm/auth/apset > .npmrc
```

```bash
npm i eslint @apset/eslint-config-apset
```

OR

```bash
yarn add eslint @apset/eslint-config-apset
```

## Usage
* Create `.eslintc` file
```json
{
  "extends": "@apset/eslint-config-apset"
}
```

## Author
- Partner Ecosystem Team, IBM Digital Business Group
