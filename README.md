# InteractGPT in React

This is a clone of the Gemini conversational AI, built using React. It provides a clean and interactive chat interface to communicate with the Gemini API.

## 🚀 Features

  * **Chat Interface**: A responsive and user-friendly interface for sending and receiving messages.
  * **Gemini API Integration**: Connects to the Gemini API to provide intelligent and context-aware responses.
  * **State Management**: Uses React's Context API to manage the application's state, including chat history and user input.
  * **Component-Based Architecture**: The application is built with a modular structure, with separate components for the sidebar and the main chat area.

## 🛠️ Technologies Used

  * **React**: A JavaScript library for building user interfaces.
  * **Vite**: A fast build tool that provides a quicker and leaner development experience for modern web projects.
  * **Google AI SDK**: For interacting with the Gemini API.

## 🏁 Getting Started

### Prerequisites

  * Node.js and npm (or yarn) installed on your machine.
  * A Gemini API key.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/siddh113/InteractGPT-In-React.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd InteractGPT-In-React/gemini-clone
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Configuration

You need to add your Gemini API key to the project. Open the `src/Config/gemini.js` file and replace `"YOUR_API_KEY"` with your actual API key.

```javascript
// src/Config/gemini.js
const API_KEY = "YOUR_API_KEY";
```

## 🎈 Usage

To run the application in development mode, use the following command:

```sh
npm run dev
```

This will start the development server, and you can view the application in your browser at `http://localhost:5173`.

## 📁 Project Structure

```
gemini-clone/
├── src/
│   ├── components/       # Contains the Main and Sidebar components
│   ├── Config/           # Configuration for the Gemini API
│   ├── Context/          # React Context for state management
│   ├── assets/           # Images and other static assets
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Entry point of the application
├── index.html            # The main HTML file
└── package.json          # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome\! Feel free to open an issue or submit a pull request if you have any ideas for improvements.
