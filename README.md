# Design Systems Engineer Design System

A bit of a meta project. This is the design system used for the the [Design Systems Engineer](https://designsystems.engineer) website and the example material for the course hosted there.

## Getting started

To use and build the design system, you'll need to have [Node](https://nodejs.org/en/) (v12+ is probably best) and [Yarn](https://classic.yarnpkg.com/en/docs/install) installed.

1. Clone this repo.

   ```zsh
   $ git clone git@github.com:DesignSystemsEngineer/designsystem.git
   ```

   ```zsh
   $ cd designsystem
   ```

1. Install dependencies

   Post install this will also run `lerna bootstrap` to prep all the monorepo stuff.

   ```zsh
   $ yarn install
   ```

1. Build tokens and Storybook

   ```zsh
   $ yarn build
   ```
