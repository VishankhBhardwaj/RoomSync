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
    <div className='w-full h-full py-2 md:py-4 animate__animated animate__fadeInDown bg-[#0f1625]'>
      <div className='flex flex-row gap-3 md:gap-4 border-b border-[#374151] px-3 md:px-4 pb-3'>
        <div>
          <MessageSquareText className='relative top-[14px] md:top-6 text-[#1fadad] h-5 w-5 md:h-6 md:w-6' />
        </div>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold text-white'>Messages</h1>
          <p className='text-sm md:text-base text-[#88a3af]'>Connect with potential roommates</p>
        </div>
      </div>
      <div className={`md:flex md:flex-row md:gap-4 md:p-6 mt-3 px-3 md:px-0 ${activeConversationId !== null ? 'hidden md:flex' : 'block'} transition-all duration-200 md:h-[calc(100vh-130px)]`}>
        {/* search bar */}
        <div className='md:h-full md:w-[40%] bg-[#1f2937] h-[calc(100vh-140px)] rounded-xl shadow-md overflow-hidden flex flex-col'>
          <div className="px-3 py-3 md:p-4 border-b border-[#374151] bg-[#1f2937] rounded-t-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#88a3af] w-4 h-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 shadow-inner bg-[#374151] shadow-gray-600 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#61a6fa] text-sm text-white"
              />
            </div>
          </div>
          {/* chat list */}
          <div className='flex-1 flex flex-col bg-[#1f2937] overflow-y-auto'>
            {conversations.map((conversation) => (
              <div key={conversation.id} className='w-full bg-[#1f2937] hover:bg-[#111827]' onClick={() => setActiveConversationId(conversation.id)}>
                <div className={`flex items-center p-3 hover:bg-[#111827] bg-[#1f2937] border-b border-[#374151] ${conversation.id === activeConversationId ? 'bg-[#2d3c54] shadow-inner' : ''} group cursor-pointer transition-all duration-200`}>
                  <div className={`relative ${conversation.id === activeConversationId ? 'bg-[#2d3c54]' : ''} group-hover:bg-[#111827] transition-all duration-200`}>
                    {typeof conversation.avatar === "string" && conversation.avatar.startsWith("/") ? (
                      <img src={conversation.avatar} alt={conversation.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#374151] flex items-center justify-center text-base md:text-lg font-bold text-white">
                        {conversation.avatar}
                      </div>
                    )}
                    {conversation.isOnline && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-green-500 border-2 border-[#1f2937] rounded-full"></span>
                    )}
                  </div>
                  <div className="ml-3 md:ml-4 flex-1 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm md:text-base text-white truncate">{conversation.name}</span>
                      <span className="text-[10px] md:text-xs text-[#88a3af] shrink-0 ml-1">{conversation.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#88a3af] text-xs md:text-sm truncate pr-2 max-w-[80%]">{conversation.lastMessage}</span>
                      {conversation.unreadCount && (
                        <span className="shrink-0 bg-[#61a6fa] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">{conversation.unreadCount}</span>
                      )}
                    </div>
                    <div className="text-[10px] md:text-xs text-green-500">{conversation.matchPercentage}% match</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='rounded-xl shadow-md md:w-[60%] hidden md:block bg-[#1f2937] md:h-full'>
          {activeConversationId ? (
            <PcConversation conversation={conversations.find(c=>c.id === activeConversationId)}/>
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <div className="text-center p-8">
                <MessageSquareText className="mx-auto h-16 w-16 text-[#374151] opacity-50" />
                <h3 className="mt-4 text-xl font-medium text-white">No conversation selected</h3>
                <p className="mt-2 text-[#88a3af]">Choose a conversation from the list to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Empty state message for desktop when no conversation is selected (inside the PcConversation area) */}

      {/* Mobile conversation view */}
      <div className={`md:hidden h-screen ${activeConversationId !== null ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#1f2937]`}>
        <Conversation
          conversation={conversations.find(c => c.id === activeConversationId)}
          onBack={() => setActiveConversationId(null)}
        />
      </div>

    </div>
  );
}

export default Messages