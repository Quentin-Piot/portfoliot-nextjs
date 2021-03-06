
# YOUR PROJECT Monorepo with Turborepo
## โ๏ธ Running apps

### Prerequisites

* Add **.env** in _/packages/web_ and _/packages/api_, following .env.example of each folder to know what variables are required.

### Scripts

Be at the root level

* 1. ๐ชฅ Clean everything up

```
yarn run clean
```

* 2. ๐ฅช Install all the packages:
```
yarn
``` 

* 3. ๐งฑ Build all dependencies:
```
yarn run build
```

* 4. ๐ Run apps:

Front
```
yarn run dev:web
``` 
Back
```
yarn run dev:api
``` 

**OR**

Front + Back
```
yarn run dev
``` 

## ๐ก Local environment setup

Avoid using staging to test your code. Instead setup you own local environment:

* 1. ๐ฝ Database  setup:


* 2. 
## ๐งช Formatting and linting apps

Be at the root level

### ๐งพ Prettier formatter (will format all the code):

```
yarn run prettier
``` 

### ๐ก Linter check (this will be normally done on every pre-commit):

```
yarn run lint
``` 

## ๐งช Testing apps

Be at the root level

```
yarn run test
``` 

## ๐ How to install a local module

Navigate to a folder where this package is needed and proceed normally with `yarn add PACKAGE_NAME`. Package name being the name in package.json, NOT the folder in which the code is living.

## Packages

This architecture comes with apps and packages, that can be easily extended. You can add a new package or app by simply creation a new folder, run `yarn init` in the folder and start coding!

