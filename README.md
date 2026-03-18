# askKTU — University RAG Chatbot

A question-answering web app for KTU students. Ask questions in natural language and get answers grounded in official university documents (statutes, regulations, scholarship rules, etc.).

Built with React + FastAPI + ChromaDB + Groq (LLaMA 3.3).

---

## Prerequisites

- Python 3.x
- Node.js 20+ (use [nvm](https://github.com/nvm-sh/nvm))
- A **Groq API key** — free at [console.groq.com](https://console.groq.com)
- A **HuggingFace token** — free at [huggingface.co](https://huggingface.co) → Settings → Access Tokens → New token (Read access)

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/BenediktasAn/ProgramavimoProjektas.git
cd ProgramavimoProjektas
```

### 2. Create the `.env` file

Create a file called `.env` in the project root:

```
GROQ_API_KEY=your_groq_key_here
HF_API_KEY=your_huggingface_token_here
```

### 3. Set up the Python environment

```bash
python3 -m venv venv
source venv/bin/activate

pip install fastapi uvicorn groq langchain-community langchain-core python-dotenv requests
```

### 4. Set up the frontend

```bash
cd WebPage
npm install
cd ..
```

---

## Running locally

You need **two terminals** running at the same time.

### Terminal 1 — Chatbot backend

```bash
source venv/bin/activate
uvicorn chatbot.main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

### Terminal 2 — Frontend

```bash
cd WebPage
npm run dev
```

The website will be available at `http://localhost:5173`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| Map | Leaflet / React-Leaflet |
| Chatbot API | Python, FastAPI |
| RAG / Vector search | ChromaDB |
| Embeddings | HuggingFace Inference API (`paraphrase-multilingual-MiniLM-L12-v2`) |
| LLM | Groq — LLaMA 3.3 70B |

---

## Project Structure

```
ProgramavimoProjektas/
├── chatbot/
│   ├── chatbot.py          # RAG logic (embeddings + LLM)
│   ├── main.py             # FastAPI server
│   ├── chroma_db/          # Pre-built vector database
│   └── documents/          # KTU source documents (PDFs)
├── WebPage/
│   └── src/
│       ├── components/chat/Chat.tsx   # Chat UI
│       ├── components/map/Map.tsx     # University map
│       └── pages/                     # Page routes
├── .env                    # API keys (not committed)
└── README.md
```
