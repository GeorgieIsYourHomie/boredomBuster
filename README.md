# Boredom Buster

Welcome to Boredom Buster, a simple web application that helps you find exciting activities to do when you're feeling bored!

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Usage](#api-usage)
- [License](#license)

## Description

Boredom Buster is a React TypeScript-based, responsive web application that leverages the BoredAPI to provide users with random activity suggestions based on selected categories. Whether you're looking for something fun, creative, or relaxing, Boredom Buster has you covered.

## Features

- Choose from a variety of activity categories.
- Get a random activity suggestion with a click of a button.
- Simple and user-friendly interface.
- Error handling for smooth user experience.

### Landing Page

![Landing Page](../boredom-buster/client/public/images/boredom-buster-landing-page.png)

- **One page web app**
- **Navigation at top**

### Other Page Feature: Select Category

![Select Category](../boredom-buster/client/public/images/boredom-buster-landing-page-select-category.png)

- **Select desired categories**

### Other Page Feature: Find Activity

![Find Activity](../boredom-buster/client/public/images/boredom-buster-landing-page-find-activity.png)

- **Click "Find Activity" button to search for selected category activity**

### Responsiveness:

![Responsive Design](../boredom-buster/client/public/images/boredom-buster-responsiveness.gif)

- **Fully responsive website design**

## Technologies Used

- React
- TypeScript
- Axios for API requests
- Tailwind CSS for styling

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/boredom-buster.git

   ```

2. Navigate to the project directory:

   ```bash
    cd boredom-buster

   ```

3. Install project dependencies:

   ```bash
    npm install

   ```

4. Compile all TypeScript code:

   ```bash
   npm run tsc
   ```

5. Start the development server:

   ```bash
   npm run client

   ```

6. Start the backend server:

   ```bash
   npm run start

   ```

7. Optional: Run react build (If you want to view from server):

   ```bash
   npm run build

   ```

8. Open your web browser and go to http://localhost:3000 to use the application.

## Usage

    Select a category from the dropdown menu.
    Click the "Find Activity" button to fetch a random activity suggestion.
    Enjoy your newfound activity idea or click once again to receive another!

## API Usage

This project uses the BoredAPI to retrieve random activity suggestions. Visit BoredAPI for more information about the API and its terms of use.

## License

This project uses data from the BoredAPI, which is available under the MIT License. You can find more information [here](https://www.boredapi.com/about).
