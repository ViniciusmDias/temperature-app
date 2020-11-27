# :sunny: Temperature App :umbrella:

A simple web application that allows users to view the temperature forecast for the next six hours at a given location.

## :open_file_folder: Project Structure

The project contains the following main folders:

./coverage => application test coverage results;
./public => static html;
./src => root directory;

In root directory:

- src/tests => Tests of application;
- src/components => Reusable application components;
- src/pages => Application pages;
- src/service => Application services (API);
- src/styles => Global application styles;

## :sparkles: Overview

This application was developed with **React** and **Typescript**. (`create-react-app`);

Each component has a folder with its respective name and inside it has two file, the component structure (**index.jsx**) and the component style (**style.ts**). Practically all components have a rendering test, found in the **test** directory.

**Prettier** and **ESlint** were used to standardize the code and improve productivity.

![screenshot](https://raw.githubusercontent.com/ViniciusmDias/temperature-app/main/public/temperatureapp-demo.png?token=AFRJMG3LLDF43VYRJZUDEKK7ZGOKC)

## :heavy_check_mark: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

From your command line run the commands.

Clone this repo:
`git clone https://github.com/ViniciusmDias/quote-generator`

Go to the root folder (/temperature-app) and install the dependencies:
`yarn install`

Start the application in development mode:
`yarn dev`

The application will start at `http://localhost:3000/`.

Build the application for production:
`yarn build`

Runs rendering tests:
`yarn test: coverage`

## :heavy_plus_sign: Added Libraries

Some libraries were added to improve the project and make the developer more proactive:

- ESlint;
- Prettier;
- Axios;
- Styled Components;
- React Icons;

## :eyeglasses: Acknowledgements

- [Easy start of a Typescript/React project (w/ Yarn, ESlint and Prettier) ](https://dev.to/viniciusmdias/easy-start-of-a-typescript-react-project-w-eslint-and-prettier-55d4)

## :briefcase: Contact

- Website [viniciusdias.works](https://viniciusdias.works)
- GitHub [@viniciusmdias](https://github.com/ViniciusmDias)
- Twitter [@vinidiasdev](https://twitter.com/vinidiasdev)
