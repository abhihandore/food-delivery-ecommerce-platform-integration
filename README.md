## Overview

The Project is refers to the food delivery web application, where we can add our favorite food to the card and can generate a bill.

## Installation

```
npm install
npm start
```

## Usage

Its very straight forward, just do "npm install" and then "npm start", and we are ready to explore the side.

## Project Structure

├── src
│ ├── components
│ ├── context
│ ├── fonts
│ ├── styles
│ └── App.js
├── public
├── package.json
└── README.md

## Components

Here is the list of the main components used in the project :

- PageLayout - To configure the layout of the dashboard page. [src/components/PageLayout/PageLayout.tsx]
- Sidebar - It is a sidebar component where all the menus and theme toggler is added [src/components/Sidebar/Sidebar.tsx]
- CartContext - It is an Context API created for the global state maintainance of Cart Page. [src/context/CartContext.tsx]
- ThemeProvider - This component is designed for the Theme (Dark or Light) toggle. [src/context/ThemeProvider.tsx]
- ProductGrid - This component is to get the list of products we have and render on screen [src/components/Common/ProductsGrid]

## Libraries and Dependencies

- React
- React Icons

## Tech Stack:

1. React
2. Typescript
3. React Icons [External Library]
4. Module CSS

# Font Used:

<!-- All the font faces are in index.css file -->

1. Roboto Bold [700]
2. Roboto Medium [600]
3. Roboto Regular [500]
4. Roboto Light [400]

# BreakPoints Used

1. breakpoint-sm: 576px;
2. breakpoint-md: 768px;
3. breakpoint-lg: 992px;
4. breakpoint-xl: 1200px;
5. breakpoint-xxl: 1360px;
