# ExpressJS with Typescript

These Tutorial is based on express api with the help of typescript

Learn the Typescript from Here [Typescript](https://github.com/PrathameshDhande22/Web-Development-Tutorial/tree/main/Typescript)

**You can also take help of the these blog to setup your application [Read Here](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)**

# Setup the Application

1. Create the folder for the application

```
mkdir Server
cd Server
npm init -y
```

2. Install the following packages:

```
 npm i express dotenv http-status-codes mongoose nodemon
 npm i typescript ts-node @types/node @types/express --save-dev
```

3. Initialize the Tsconfig file

```
tsc --init
```

4. Write the codes in the following folder

```
cd src
```

In that folder write the code in `index.ts` file and write the express code.

5. Use the eslint for controlling the application

```
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
```

6. Initialize the eslint plugin

```
npx eslint --init
```

and follow some interactive question.

7. Add the following code in your `package.json` file.

```
"scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  },
```

8. Run the server using

```
npm run dev
```
