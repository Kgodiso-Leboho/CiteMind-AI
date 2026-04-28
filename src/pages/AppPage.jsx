import { useState, useRef, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/Chatbox";
import { askQuestion } from "../services/api";

export default function AppPage() {
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState({
    id: Date.now(),
    title: "New Research Session",
    messages: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNewChat = useCallback(() => {
    if (currentSession.messages.length > 0) {
      setSessions((prev) => [currentSession, ...prev]);
    }

    setCurrentSession({
      id: Date.now(),
      title: "New Research Session",
      messages: [],
    });
  }, [currentSession]);

  const handleLoadSession = useCallback(
    (id) => {
      const session = sessions.find((s) => s.id === id);
      if (session) setCurrentSession({ ...session });
    },
    [sessions]
  );

  const handleSend = useCallback(
    async (question) => {
      if (!question.trim() || isLoading) return;

      const userMessage = { role: "user", content: question };

      setCurrentSession((prev) => ({
        ...prev,
        title:
          prev.messages.length === 0
            ? question.slice(0, 42) + (question.length > 42 ? "…" : "")
            : prev.title,
        messages: [...prev.messages, userMessage],
      }));

      setIsLoading(true);
      setTimeout(scrollToBottom, 50);

      try {
        const { answer, sources } = await askQuestion(question);

        setCurrentSession((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            { role: "ai", content: answer, sources: sources || [] },
          ],
        }));
      } catch {
        setCurrentSession((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              role: "ai",
              content:
                "**Connection Error**\n\nUnable to reach backend.",
              sources: [],
            },
          ],
        }));
      } finally {
        setIsLoading(false);
        setTimeout(scrollToBottom, 100);
      }
    },
    [isLoading]
  );

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar
        sessions={sessions}
        currentSessionId={currentSession.id}
        onNewChat={handleNewChat}
        onLoadSession={handleLoadSession}
      />

      <ChatBox
        session={currentSession}
        isLoading={isLoading}
        onSend={handleSend}
        messagesEndRef={messagesEndRef}
      />
    </div>
  );
}