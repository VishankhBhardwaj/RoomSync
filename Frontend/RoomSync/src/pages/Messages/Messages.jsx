import React, { useEffect } from 'react'
import { MessageSquareText, Search } from 'lucide-react';
import Conversation from '../../Components/MessagesComponents/Conversation';
import PcConversation from '../../Components/MessagesComponents/PcConversation';
import 'animate.css';
const Messages = () => {
  const [activeConversationId, setActiveConversationId] = React.useState(null);
  const conversations = [
    {
      id: 1,
      name: "Alex Chen",
      avatar: "/myphoto.jpeg",
      lastMessage: "Would you like to set up a video call?",
      time: "3:00 PM",
      matchPercentage: 94,
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 2,
      name: "Maria Garcia",
      avatar: "MG",
      lastMessage: "I love your taste in decor!",
      time: "Yesterday",
      matchPercentage: 89,
      isOnline: false
    },
    {
      id: 3,
      name: "James Wilson",
      avatar: "/myphoto.jpeg",
      lastMessage: "When are you free to meet?",
      time: "2 days ago",
      matchPercentage: 86,
      unreadCount: 1,
      isOnline: true
    }
  ];
  useEffect(() => {
    console.log(activeConversationId);
  })
  return (
    <div className=' w-full h-full py-2 animate__animated animate__fadeInDown'>
      <div className='flex flex-row gap-4 border-b-2 md:border-b-1 md:border-blue-200 md:p-4'>
        <div>
          <MessageSquareText className='relative top-6' />
        </div>
        <div>
          <h1 className='text-3xl'>Messages</h1>
          <p className='text-gray-600'>Connect with potential roommates and build relationships</p>
        </div>
      </div>
      <div className={`md:flex md:flex-row  md:gap-4 md:justify-around md:block  md:h-[90%] md:p-6 ${activeConversationId !== null ? 'hidden' : 'block transition-all duration-200'}`}>
        {/* search bar */}
        <div className=' md:w-[30%] md:h-[90%] md:w-[50%] bg-white h-[78%] md:h-[87%] rounded-xl shadow-xl'>
          <div className="p-4 border-b-2 border-gray-100 bg-white rounded-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 bg-gray-100" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-3 shadow-inner  shadow-gray-600 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
          {/* chat list */}
          <div className='flex flex-col gap-2 bg-white h-[100%] rounded-xl shadow-xl'>
            {conversations.map((conversation) => (
              <div className='w-full p-2 bg-white ' onClick={() => setActiveConversationId(conversation.id)}>
                <div key={conversation.id} className={`flex items-center p-4 border-b border-gray-400 ${conversation.id === activeConversationId?'bg-[#e4f0fe]  shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),_0_4px_8px_rgba(0,0,0,0.1)]':''} group hover:bg-white shadow-inner shadow-gray-300 cursor-pointer transition-all duration-200  rounded-xl`}>
                  <div className={`relative ${conversation.id === activeConversationId?'bg-[#e4f0fe]':''} group-hover:bg-white transition-all duration-200`}>
                    {typeof conversation.avatar === "string" && conversation.avatar.startsWith("/") ? (
                      <img src={conversation.avatar} alt={conversation.name} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
                        {conversation.avatar}
                      </div>
                    )}
                    {conversation.isOnline && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="ml-4 flex-1 ">
                    <div className={`flex  justify-between items-center ${conversation.id === activeConversationId?'bg-[#e4f0fe]':''} group-hover:bg-white transition-all duration-200`}>
                      <span className={`font-semibold ${conversation.id === activeConversationId?'bg-[#e4f0fe]':''} group-hover:bg-white transition-all duration-200`}>{conversation.name}</span>
                      <span className={`text-xs text-gray-400 ${conversation.id === activeConversationId?'bg-[#e4f0fe]':''} group-hover:bg-white transition-all duration-200`}>{conversation.time}</span>
                    </div>
                    <div className={`flex justify-between items-center ${conversation.id === activeConversationId?'bg-[#e4f0fe]':''} group-hover:bg-white transition-all duration-200`}>
                      <span className={`text-gray-600 text-sm truncate ${conversation.id === activeConversationId?'bg-[#e4f0fe]':''} group-hover:bg-white transition-all duration-200`}>{conversation.lastMessage}</span>
                      {conversation.unreadCount && (
                        <span className="ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">{conversation.unreadCount}</span>
                      )}
                    </div>
                    <div className={`text-xs text-green-600 ${conversation.id === activeConversationId?'bg-[#e4f0fe]':''} group-hover:bg-white transition-all duration-200`}>{conversation.matchPercentage}% match</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='rounded-xl shadow-xl w-full hidden md:block '>
          <PcConversation conversation={conversations.find(c=>c.id === activeConversationId)}/>
        </div>
      </div>

      {/* conversation */}
      <div className={`md:hidden h-full border-2 border-orange-400 ${activeConversationId !== null ? 'block' : 'hidden'}`}>
        <Conversation
          conversation={conversations.find(c => c.id === activeConversationId)}
          onBack={() => setActiveConversationId(null)}
        />
      </div>

    </div>
  );
}

export default Messages