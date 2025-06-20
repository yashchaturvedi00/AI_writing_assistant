 # 📝 AI Writing Assistant

AI Writing Assistant is a full-stack web application designed to help users improve their writing with the power of artificial intelligence. Users can check grammar, fix spelling mistakes, and rephrase content intelligently. This project is powered by the OpenAI API and features a clean, responsive UI built with modern web technologies.

---

## 🔧 Tech Stack

- 🌐 Frontend: Vite + React + TailwindCSS  
- 🔧 Backend: Node.js + Express  
- 🧠 AI Engine: OpenAI GPT-4o (via OpenAI API)  
- 🔗 HTTP Client: Axios  
- 🌍 Routing: React Router DOM  
- 🎨 Icons: react-icons  
- 🔐 Authentication: Privy (optional)

---

## 📁 Project Structure

vite-project/
│
├── public/
│
├── src/
│ ├── components/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Editor.jsx
│ │ ├── Navbar.jsx
│ │ └── Login.jsx
│ ├── images/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── .env
├── package.json
└── vite.config.js

server/
│
├── routes/
│ ├── grammarcheck.js
│ ├── analyze.js
│
├── app.js
├── package.json
└── .env


---


## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/ai-writing-assistant.git
cd ai-writing-assistant
2. Backend Setup
bash
Always show details

Copy
cd server
npm install
Create a .env file inside the server/ directory and add:

env
Always show details

Copy
OPENAI_API_KEY=your_openai_api_key_here
Then start the backend server:

bash
Always show details

Copy
node app.js
Backend will run at: http://localhost:8000

3. Frontend Setup
bash
Always show details

Copy
cd vite-project
npm install
Create a .env file inside vite-project/ and add:

env
Always show details

Copy
VITE_BACKEND_URL=http://localhost:8000
Then start the Vite dev server:

bash
Always show details

Copy
npm run dev
Frontend will run at: http://localhost:5173

✨ Features
✍️ AI-Powered Sentence Rephrasing

🧠 Smart Grammar Checking

✅ Intelligent Spell Correction

🔐 Login/Logout (Privy Auth)

🎨 Responsive UI with TailwindCSS

🛠️ API Endpoints
POST /grammarcheck
Corrects grammar in provided text using GPT.

Request body:

json
Always show details

Copy
{ "text": "your input sentence here" }
Response:

json
Always show details

Copy
"Corrected sentence from GPT"
📷 Screenshots
(Add screenshots here if available.)

🛠️ To-Do
 Add AI writing tone selector (Formal, Informal, etc.)

 Save writing history for logged-in users

 Add deployment CI/CD pipeline

 Add dark/light mode toggle
---
🌍 Deployment Suggestions
You can deploy the frontend using:

Vercel

Netlify

And the backend using:

Render

Railway

Heroku

🤝 Acknowledgements
OpenAI for providing GPT-4o

Masynctech Coding School for educational mentorship

Privy for authentication support

📄 License
This project is licensed under the MIT License. Feel free to modify and use it for your personal or commercial projects.

🙋‍♀️ Author
Made with ❤️ by yash chaturvedi
Connect on LinkedIn | GitHub: yashchaturvedi00
"""



