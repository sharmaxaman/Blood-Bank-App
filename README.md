# Blood Bank App - README

Welcome to the Blood Bank App, a web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application is designed to help manage and streamline blood donation processes, making it easier for donors, recipients, and administrators to connect and coordinate.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction

The Blood Bank App is a comprehensive solution aimed at simplifying the blood donation process by providing an easy-to-use platform for users to register, find blood donation events, request blood, and manage donation records. The app also includes an administration panel to manage donors, recipients, events, and other crucial aspects of the blood donation ecosystem.

## Features

- **User Registration and Login:** Users can create accounts and log in to the application securely.

- **Donor Dashboard:** Donors can view their donation history, upcoming donation events, and manage their profile.

- **Event Management:** Administrators can create and manage blood donation events, specifying event details and required blood types.

- **Admin Panel:** Administrators have access to an admin panel to manage users, events, donations, and other critical aspects of the app.

## Getting Started

Follow these instructions to get the Blood Bank App up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure it's installed and the MongoDB server is running)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/bhardwajdeepak0052/Blood-Bank-App.git
   ```

2. Install server dependencies:
   ```
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   ```

4. Create a `.env` file in the `server` directory and add your MongoDB connection string:
   ```
   PORT =  Whichever you want (ex-> 8080)
   JWT_SECRET = (*******)  //security password for token 
   MONGODB_URL=your-mongodb-connection-string
   ```

5. Start the server and client by a single command:
   ```
   npm run dev
   ```
   server will run on port--8080

6. Access the application in your web browser at: `http://localhost:3000`

## Technologies Used

- **Frontend**: React.js, Redux for state management, Bootstrap for styling.
- **Backend**: Node.js, Express.js, MongoDB for database.
- **Authentication**: JSON Web Tokens (JWT).
- **Deployment**: Heroku for hosting the application.


