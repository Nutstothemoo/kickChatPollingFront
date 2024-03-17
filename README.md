# Frontend Setup for Launching Survey on Kick

This repository contains the source code for the frontend required to configure and launch a survey on Kick. Follow the steps below for proper configuration and efficient deployment.

## Prerequisites

Before getting started, make sure you have the following tools installed on your system:

- Node.js (recommended version)
- npm (Node Package Manager)

## Configuration

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Nutstothemoo/kickChatPollingFront.git
   cd front-polling-kick
   ```
 3. Create a `.env` file at the root of the project and specify the URL of the Backend API for your Kick survey. Make sure the `.env` file contains the following variable:

  BACK_END_URL=<backend-api-url>

Replace `<backend-api-url>` with the actual URL of your backend.

## Installing Dependencies

1. Run the following command to install the necessary dependencies:

 ```bash
npm i
 ```

## Launching the Frontend

1. Once the dependencies are installed, start the frontend using the command:
2. 
 ```bash
 npm run dev
 ```


This will start the development server and automatically open your default browser to display the application.

## Usage

After launching the frontend, you can access the user interface to configure and launch your survey on Kick. Follow the on-screen instructions to customize the survey settings according to your requirements.

## Contribution

Contributions are welcome! If you find any bugs or want to add features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Follow these steps to easily configure and launch your survey on Kick using this frontend. If you have any questions or encounter any issues, feel free to contact the development team. Happy surveying!
