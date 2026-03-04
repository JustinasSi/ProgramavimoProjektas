import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# System prompt — tells the LLM how to behave
SYSTEM_PROMPT = """You are a helpful university assistant chatbot. 
You answer questions about university rules, regulations, scholarships, 
dormitories, and academic policies.

Rules:
- Only answer based on the context provided to you.
- If you don't know the answer or the context doesn't cover it, say: 
  "I don't have information about that. Please contact the student office."
- Be friendly and concise.
- Always cite which document/section your answer comes from when possible.
"""


def get_response(user_message: str, conversation_history: list) -> str:
    """
    Takes a user message and conversation history, returns the chatbot's response.
    
    Later, this is where you'll add RAG:
    1. Search the vector store for relevant document chunks
    2. Add those chunks to the prompt
    3. Send to the LLM
    """
    
    # Build the messages list for the API
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    # Add conversation history (so the bot remembers previous messages)
    messages.extend(conversation_history)
    
    # Add the new user message
    messages.append({"role": "user", "content": user_message})
    
    # TODO: RAG step will go here later
    # relevant_chunks = vectorstore.similarity_search(user_message, k=3)
    # context = "\n\n".join([chunk.page_content for chunk in relevant_chunks])
    # Modify the user message to include context:
    # messages[-1]["content"] = f"Context:\n{context}\n\nQuestion: {user_message}"
    
    # Call the LLM
    response = client.chat.completions.create(
        model="gpt-4o-mini",  # cheap and good enough for Q&A
        messages=messages,
        temperature=0.3,  # low temperature = more factual, less creative
        max_tokens=500,
    )
    
    return response.choices[0].message.content