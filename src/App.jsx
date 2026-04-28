import { useState, useRef, useCallback } from 'react'
import Sidebar from './components/Sidebar'
import ChatBox from './components/Chatbox'
import { askQuestion } from './services/api'

export default function App() {
  const [sessions, setSessions] = useState([])
  const [currentSession, setCurrentSession] = useState({
    id: Date.now(),
    title: 'New Research Session',
    messages: [],
  })
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNewChat = useCallback(() => {
    if (currentSession.messages.length > 0) {
      setSessions(prev => [currentSession, ...prev])
    }
    setCurrentSession({
      id: Date.now(),
      title: 'New Research Session',
      messages: [],
    })
  }, [currentSession])

  const handleLoadSession = useCallback((id) => {
    const session = sessions.find(s => s.id === id)
    if (session) setCurrentSession({ ...session })
  }, [sessions])

  const handleSend = useCallback(async (question) => {
    if (!question.trim() || isLoading) return

    const userMessage = { role: 'user', content: question }
    const updatedMessages = [...currentSession.messages, userMessage]

    const updatedSession = {
      ...currentSession,
      messages: updatedMessages,
      title: currentSession.messages.length === 0
        ? (question.length > 42 ? question.slice(0, 42) + '…' : question)
        : currentSession.title,
    }
    setCurrentSession(updatedSession)
    setIsLoading(true)

    setTimeout(scrollToBottom, 50)

    try {
      const { answer, sources } = await askQuestion(question)
      const aiMessage = { role: 'ai', content: answer, sources: sources || [] }
      setCurrentSession(prev => ({
        ...prev,
        messages: [...prev.messages, aiMessage],
      }))
    } catch (err) {
      const errorMessage = {
        role: 'ai',
        content: '**Connection Error**\n\nUnable to reach the research API. Please check your backend configuration at `/query` and ensure it accepts `{ question, history }` and returns `{ answer, sources }`.',
        sources: [],
      }
      setCurrentSession(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }))
    } finally {
      setIsLoading(false)
      setTimeout(scrollToBottom, 100)
    }
  }, [currentSession, isLoading])

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
  )
}