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
    <div className="flex flex-col flex-grow  h-[575px] md:h-full bg-[#1f2937]  p-2 md:p-4 shadow-md animate__animated animate__fadeIn ">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3 ">
        <div className="flex items-center gap-2 ">
          {/* Back Button (Mobile Only) */}
          <button onClick={onBack} className="md:hidden mr-2">
            <ArrowLeft className="w-5 h-5 text-gray-600 " />
          </button>
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="w-10 h-10 rounded-full object-cover "
          />
          <div>
            <div className="font-semibold text-white">{conversation.name}</div>
            <div className="text-sm text-green-600 ">Online now</div>
          </div>
        </div>
        <div className="flex gap-2 ">
          <button className="flex items-center text-white  gap-1 px-3 py-1 group  border rounded-lg  text-sm  hover:text-[#42abf4]  shadow-sm hover:shadow-xl transition-all duration-200">
            <Video className="w-4 h-4  group-hover:text-[#42abf4]   shadow-sm  group-hover:shadow-xl transition-all duration-200" /> Video Call
          </button>
          <button className="flex  items-center text-white gap-1 px-3 py-1 group  border rounded-lg  text-sm  hover:text-[#42abf4]  shadow-sm hover:shadow-xl transition-all duration-200">
            <Eye className="w-4 h-4  group-hover:text-[#42abf4]   shadow-sm  group-hover:shadow-xl transition-all duration-200" /> View Profile
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4 bg-[#1f2937] min-h-0 ">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col  ${
              msg.sentByMe ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                msg.sentByMe
                  ? 'bg-[#61a6fa] text-white'
                  : 'bg-gray-100 text-gray-600 shadow-inner shdaow-gray-500 '
              }`}
            >
              {msg.text}
            </div>
            <div className="text-xs text-gray-500 mt-1 ">
              {msg.time}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}

        <div className="flex items-center fixed bottom-5 w-[95%] gap-2 border-2 border-green-400">
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
  );
};

export default Conversation;
