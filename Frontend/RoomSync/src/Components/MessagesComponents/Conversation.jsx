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
    <div className="flex flex-col h-screen bg-[#1f2937] relative animate__animated animate__fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-600 pb-3 p-2 md:p-4">
        <div className="flex items-center gap-2">
          {/* Back Button (Mobile Only) */}
          <button onClick={onBack} className="md:hidden mr-2 p-1 rounded-full hover:bg-[#374151] transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-white">{conversation.name}</div>
            <div className="text-xs md:text-sm text-green-600">Online now</div>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2">
          <button className="flex items-center text-white gap-1 px-2 py-1 md:px-3 md:py-1 group border border-gray-600 rounded-lg text-xs md:text-sm hover:text-[#42abf4] shadow-sm hover:shadow-xl transition-all duration-200">
            <Video className="w-3 h-3 md:w-4 md:h-4 group-hover:text-[#42abf4] transition-all duration-200" /> <span className="hidden sm:inline">Video Call</span>
          </button>
          <button className="flex items-center text-white gap-1 px-2 py-1 md:px-3 md:py-1 group border border-gray-600 rounded-lg text-xs md:text-sm hover:text-[#42abf4] shadow-sm hover:shadow-xl transition-all duration-200">
            <Eye className="w-3 h-3 md:w-4 md:h-4 group-hover:text-[#42abf4] transition-all duration-200" /> <span className="hidden sm:inline">View Profile</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-3 px-2 md:px-4 space-y-3 bg-[#1f2937] pb-20">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              msg.sentByMe ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs md:text-sm ${
                msg.sentByMe
                  ? 'bg-[#61a6fa] text-white'
                  : 'bg-[#374151] text-white shadow-inner'
              }`}
            >
              {msg.text}
            </div>
            <div className="text-[10px] md:text-xs text-gray-400 mt-1 px-1">
              {msg.time}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="absolute left-0 right-0 bottom-14 bg-[#1f2937] p-3 border-t border-gray-700">
        <div className="flex items-center gap-2 w-full mx-auto">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 shadow-inner shadow-gray-600 px-3 py-2 bg-[#374151] text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#61a6fa] text-sm"
          />
          <button className="bg-[#61a6fa] text-white px-3 py-2 rounded-full text-sm hover:bg-[#42abf4] transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
