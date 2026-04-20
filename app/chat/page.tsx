import type { Metadata } from 'next';
import ChatInterface from '@/components/chat/ChatInterface';

export const metadata: Metadata = {
  title: 'Chat with AI',
  description: 'Ask Max\'s AI anything about his projects, skills, background, and what he\'s building.',
};

export default function ChatPage() {
  return (
    <div className="pt-14 min-h-screen flex flex-col">
      <ChatInterface />
    </div>
  );
}
