import React from 'react';
import { ArrowLeft, Video, Eye } from 'lucide-react';

const Conversation = ({ conversation, onBack }) => {
  if (!conversation) return null;

  const messages = [
    {
      sender: conversation.name,
      text: "Hey! I saw your profile and we seem like a great match. Are you still looking for a roommate?",
      time: "2:30 PM",
      sentByMe: false
    },
    {
      sender: "You",
      text: "Hi Alex! Yes, I'm still looking. I love that we both enjoy cooking and yoga!",
      time: "2:45 PM",
      sentByMe: true
    },
    {
      sender: conversation.name,
      text: "Perfect! Would you like to set up a video call to chat more?",
      time: "3:00 PM",
      sentByMe: false
    }
  ];

  return (
    <div className="flex flex-col flex-grow min-h-0 h-full md:h-full bg-white rounded-xl p-2 md:p-4 shadow-md animate__animated animate__fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3 bg-white">
        <div className="flex items-center gap-2 bg-white">
          {/* Back Button (Mobile Only) */}
          <button onClick={onBack} className="md:hidden mr-2">
            <ArrowLeft className="w-5 h-5 text-gray-600 bg-white" />
          </button>
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="w-10 h-10 rounded-full object-cover bg-white"
          />
          <div>
            <div className="font-semibold bg-white">{conversation.name}</div>
            <div className="text-sm text-green-600 bg-white">Online now</div>
          </div>
        </div>
        <div className="flex gap-2 bg-white">
          <button className="flex items-center bg-white gap-1 px-3 py-1 group bg-white border rounded-lg shadow-sm text-sm  hover:text-[#42abf4] hover:bg-[#1fadad] shadow-sm hover:shadow-xl transition-all duration-200">
            <Video className="w-4 h-4 bg-white group-hover:text-[#42abf4]  group-hover:bg-[#1fadad] shadow-sm  group-hover:shadow-xl transition-all duration-200" /> Video Call
          </button>
          <button className="flex bg-white items-center gap-1 px-3 py-1 group bg-white border rounded-lg shadow-sm text-sm  hover:text-[#42abf4] hover:bg-[#1fadad] shadow-sm hover:shadow-xl transition-all duration-200">
            <Eye className="w-4 h-4 bg-white group-hover:text-[#42abf4]  group-hover:bg-[#1fadad] shadow-sm  group-hover:shadow-xl transition-all duration-200" /> View Profile
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4 bg-white min-h-0">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col bg-white ${
              msg.sentByMe ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                msg.sentByMe
                  ? 'bg-[#61a6fa] text-white'
                  : 'bg-gray-100 text-gray-600 shadow-inner shdaow-gray-500 shadow-sm'
              }`}
            >
              {msg.text}
            </div>
            <div className="text-xs text-gray-500 mt-1 bg-white">
              {msg.time}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t pt-1 sticky bottom-0 bg-white z-10 mb-[100px]">
        <div className="flex items-center gap-2 bg-white">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 shadow-inner shadow-gray-500 px-4 py-2 bg-gray-100 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
