# Chatbot with OpenAI and Whatsapp

### Goal 
The goal of this product is to build a chatbot using OpenAI's gpt-3.5-turbo-1106 model and a modular JavaScript codebase. This product aims to serve as an assistant for a consulting firm, allowing users to schedule an appointment with a specialist in actuarial or financial risk topics.

Considerations:

* Integration with Facebook is implemented to enable WhatsApp Business.

* The prompt engineering technique is based on a literary-style narrative, including an introduction, development, and conclusion.

* This OpenAI model was selected because it's only a Proof of Concept (PoC); ideally, version 4.0 would be used.

* The model is deployed using Ngrok and npm.



## Installation & Execution

1. **Clone the repository**

   ```bash
   git clone https://github.com/carlosjimenez88M/chatbot_with_OpenAI.git
   cd chatbot_with_OpenAI
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root of the project and add the following:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

   Replace `your_openai_api_key` with your actual OpenAI API key.

4. **Start the server**

   ```bash
   node server.js
   ```

   The server will run on port `3000` by default.

5. **Expose the server using Ngrok**

   In a new terminal:

   ```bash
   ngrok http 3000
   ```

   This will provide you with a public URL to interact with the chatbot from WhatsApp.

##  Project Structure

```
chatbot_with_OpenAI/
├── src/
│   └── messageHandler.js   # Logic for handling incoming messages
├── .gitignore              # Files and folders ignored by Git
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Locked versions of installed dependencies
├── server.js               # Entry point of the server
└── README.md               # Project documentation
```

##  Technologies Used

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [OpenAI API](https://platform.openai.com/)
* [Ngrok](https://ngrok.com/)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
