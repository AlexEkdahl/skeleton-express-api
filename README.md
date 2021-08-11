# skeleton-express-api

A CLI to automatically clone the [Nodejs Server Setup](https://github.com/AlexEkdahl/nodejs-server-setup).

## Installation

Install the CLI globally OR use npx:

```sh
npm install -g skeleton-express-api
```

## Usage

```sh
# with global install
skeleton-express-api name-of-app
# with npx
npx skeleton-express-api name-of-app
```

This will create a directory with the given name, clone the [Nodejs Server Setup](https://github.com/AlexEkdahl/nodejs-server-setup) repo into it, and install dependencies.

## Folder structure

```
root/
├─ node_modules/
├─ server/
│  ├─ api/
│  │  ├─ routes/
│  │  │  ├─ users.routes.js
│  │  ├─ users/
│  │  │  ├─ users.controller.js
│  │  ├─ dao/
│  │  │  ├─ users.DAO.js
│  ├─ config/
│  │  ├─ server.js
│  ├─ validation/
│  │  ├─ userValidation.js
├─ index.js
├─ package.json
├─ .gitignore
```
