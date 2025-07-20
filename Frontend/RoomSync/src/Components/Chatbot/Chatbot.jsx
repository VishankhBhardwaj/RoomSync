import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import 'animate.css'
import { TbMessageChatbot } from "react-icons/tb";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on message update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/chat/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply = {
        from: "bot",
        text: data.reply || "No response from chatbot.",
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Error contacting chatbot." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          className="bg-[#60a5fa] text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
          onClick={() => setIsOpen(true)}
        >
          <TbMessageChatbot className="bg-[#60a5fa]"/>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-xl shadow-2xl flex flex-col border border-gray-300 animate__animated animate__fadeIn">
          {/* Header */}
          <div className="bg-[#60a5fa] text-white p-4 flex justify-between items-center">
            <span className="font-semibold bg-[#60a5fa] text-black">RoomSync Chat</span>
            <button
              className="text-white text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-lg max-w-[75%] whitespace-pre-wrap text-sm ${
                  msg.from === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-900 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg max-w-[75%]">
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center border-t p-2">
            <input
              type="text"
              className="flex-1 border rounded-full px-4 py-2 text-sm outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
