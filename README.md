# GetHarley

Recommended Node version ~ `v15.11.0`

## Demo

[See Demo](https://getharley.herokuapp.com/)

## Installation (step by step)

1. Open Terminal
2. Check Node version `node -v`. If you don't have node installed go here: https://nodejs.org/en/download/
3. Check Git version `git --version`. If you don't have git installed go here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
4. Check Yarn version `yarn -v`. If you don't have yarn installed go here: https://classic.yarnpkg.com/en/docs/install
5. Go to the catalog where you would like to keep the project
6. Clone respository `git clone https://github.com/hubertjaruzal/getharley.git`
7. Open folder `cd getharley`

## Run the app

1. Run `git pull` to get newest changes
2. Run `yarn` to install all needed dependencies
3. Run `yarn run start` to run the project

## Tech Stack, Libraries and Tools

1. `Typescript` - TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
2. `React` - UI Library.
3. `Redux` - State management tool.
4. `React Hook Form` - Performant, flexible and extensible forms with easy-to-use validation.
5. `date-fns` - Modern JavaScript date utility library.
6. `styled-components` - CSS-in-JS tool that bridges the gap between components and styling.
7. `material-ui` - Ready to use Date and Time pickers.

## Unit tests

1. `/src/app/components/Match/Practitioners/__tests__/index.utils.test.tsx` - tests of core functions, which are used for preparing structure for practitioners availability slots

## Additional info

1. Specialities and Practitioners lists are placed in `/src/app/constants/` catalog. In "real live" app, those values should be fetched from API.
2. Application doesn't have multiple screens (just different form steps), I decided to not add a tool for routing. It can be easily done later if there is a need for that without any problems.
3. I decided to add state managament tool even if potential of it isn't fully used in that application. I think that it's a good practice to add those kind of things at the very beginning, because as a application grows it takes a lot of time to rewrite existing parts of the application to support that tool and doing it at the start always pays off in the future.