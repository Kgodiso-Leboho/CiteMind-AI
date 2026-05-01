import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { ArrowUp, CheckCircle2, BookOpen, Search, Quote, GraduationCap } from 'lucide-react'

const MODE_CONFIG = [
  {
    key: 'webSearch',
    label: 'Web Search',
    icon: Search,
    tooltip: 'Search the live web for up-to-date sources',
  },
  {
    key: 'citations',
    label: 'Citations',
    icon: Quote,
    tooltip: 'Include structured citations with every response',
  },
  {
    key: 'academicMode',
    label: 'Academic Mode',
    icon: GraduationCap,
    tooltip: 'Use peer-reviewed sources and formal language',
  },
]

const SUGGESTIONS = [
  { label: 'Biology', q: 'How does CRISPR-Cas9 gene editing work at a molecular level?' },
  { label: 'Climate', q: 'What is the current scientific consensus on ocean acidification?' },
  { label: 'History', q: 'What were the primary causes of the collapse of the Bronze Age?' },
  { label: 'Neuroscience', q: 'How does long-term potentiation contribute to memory formation?' },
]

export default function ChatBox({ session, isLoading, onSend, messagesEndRef }) {
  const [input, setInput] = useState('')
  const [modes, setModes] = useState({
    webSearch: true,
    citations: false,
    academicMode: false,
  })
  const [tooltip, setTooltip] = useState(null)
  const textareaRef = useRef(null)
  const hasMessages = session.messages.length > 0

  const toggleMode = (key) => {
    setModes(prev => ({ ...prev, [key]: !prev[key] }))
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 160) + 'px'
    }
  }, [input])

  const handleSend = () => {
    if (!input.trim() || isLoading) return
    onSend(input.trim(), modes)
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="px-6 py-3.5 border-b border-gray-100 bg-white flex items-center justify-between flex-shrink-0">
        <span className="font-serif text-[14px] font-medium text-gray-700">
          {session.title}
        </span>
        <div className="flex gap-2">
          {MODE_CONFIG.map(({ key, label, icon: Icon, tooltip: tip }) => {
            const active = modes[key]
            return (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleMode(key)}
                  onMouseEnter={() => setTooltip(key)}
                  onMouseLeave={() => setTooltip(null)}
                  aria-pressed={active}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px]
                    font-medium border transition-all duration-150 cursor-pointer select-none
                    active:scale-95
                    ${active
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200 hover:text-gray-700'
                    }`}
                >
                  <Icon size={11} strokeWidth={2.5} />
                  {label}
                </button>

                {/* Tooltip */}
                {tooltip === key && (
                  <div className="absolute top-full right-0 mt-2 z-50 pointer-events-none
                                  whitespace-nowrap bg-gray-900 text-white text-[11px]
                                  px-2.5 py-1.5 rounded-lg shadow-lg">
                    {tip}
                    <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-900 rotate-45" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5 scroll-smooth">
        {!hasMessages && <WelcomeScreen onSuggestion={(q) => { onSend(q) }} />}

        {session.messages.map((msg, i) =>
          msg.role === 'user'
            ? <UserMessage key={i} content={msg.content} />
            : <AIMessage key={i} content={msg.content} sources={msg.sources} />
        )}

        {isLoading && <ThinkingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-6 pb-5 pt-4 border-t border-gray-100 bg-white flex-shrink-0">
        <div className="max-w-3xl mx-auto">
          <div className={`flex items-end gap-0 border-[1.5px] rounded-xl bg-white
            transition-colors duration-150 overflow-hidden
            ${input.trim() ? 'border-blue-400' : 'border-gray-200'}`}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a research question…"
              rows={1}
              className="flex-1 px-4 py-3 text-[14px] font-light text-gray-900 placeholder-gray-300
                         bg-transparent border-none outline-none resize-none leading-relaxed"
              style={{ minHeight: '48px', maxHeight: '160px' }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`m-2 w-9 h-9 rounded-lg flex items-center justify-center
                transition-all duration-150 flex-shrink-0
                ${input.trim() && !isLoading
                  ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-100 cursor-not-allowed'}`}
            >
              <ArrowUp
                size={16}
                strokeWidth={2.2}
                className={input.trim() && !isLoading ? 'text-white' : 'text-gray-400'}
              />
            </button>
          </div>
          <div className="flex items-center justify-between mt-2 pl-1">
            <p className="text-[11px] text-gray-400 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
              Responses include citations and evidence assessment
            </p>
            <div className="flex items-center gap-1.5">
              {MODE_CONFIG.filter(m => modes[m.key]).map(({ key, label, icon: Icon }) => (
                <span
                  key={key}
                  className="flex items-center gap-1 text-[10px] text-blue-600
                             bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full"
                >
                  <Icon size={9} strokeWidth={2.5} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function WelcomeScreen({ onSuggestion }) {
  return (
    <div className="max-w-xl mx-auto text-center mt-10 px-4">
      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
        <BookOpen size={26} className="text-white" strokeWidth={1.5} />
      </div>
      <h1 className="font-serif text-2xl font-semibold text-gray-900 mb-2 leading-tight">
        What would you like to research?
      </h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-8">
        CiteMindAI delivers evidence-backed answers with structured citations. Ask any
        research question and receive rigorous, verifiable responses.
      </p>
      <div className="grid grid-cols-2 gap-2.5 text-left">
        {SUGGESTIONS.map(({ label, q }) => (
          <button
            key={q}
            onClick={() => onSuggestion(q)}
            className="p-3 border border-gray-200 rounded-xl text-left bg-white
                       hover:border-blue-300 hover:bg-blue-50 transition-all duration-150 group"
          >
            <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
              {label}
            </span>
            <span className="text-[13px] text-gray-700 leading-snug group-hover:text-blue-700">
              {q}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function UserMessage({ content }) {
  return (
    <div className="flex justify-end animate-fade-up">
      <div className="max-w-[60%] px-4 py-2.5 bg-blue-600 text-white rounded-2xl
                      rounded-br-sm text-[14px] leading-relaxed font-light">
        {content}
      </div>
    </div>
  )
}

function AIMessage({ content, sources = [] }) {
  return (
    <div className="flex gap-3 animate-fade-up">
      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center
                      flex-shrink-0 mt-0.5 font-serif text-white text-[13px] font-semibold">
        C
      </div>
      <div className="max-w-[74%] bg-white border border-gray-200 rounded-sm rounded-tl-none
                      rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden">
        <div className="px-5 py-4 prose prose-sm prose-gray max-w-none
                        prose-p:text-[14px] prose-p:leading-relaxed prose-p:text-gray-800
                        prose-strong:text-gray-900 prose-headings:font-serif
                        prose-code:text-blue-800 prose-code:bg-blue-50
                        prose-li:text-[14px] prose-li:text-gray-800">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        {sources.length > 0 && (
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {sources.map((src, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[11px] bg-blue-50 text-blue-800
                           border border-blue-200 rounded cursor-pointer hover:bg-blue-100"
              >
                [{i + 1}] {(src.title || src || 'Source').slice(0, 30)}
              </span>
            ))}
          </div>
        )}

        <div className="px-5 py-2.5 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-green-700 font-medium">
            <CheckCircle2 size={13} className="text-green-600" strokeWidth={2.5} />
            Evidence-backed response
          </div>
          <span className="text-[11px] text-gray-400">
            {sources.length > 0 ? `${sources.length} source${sources.length > 1 ? 's' : ''}` : 'AI-generated'}
          </span>
        </div>
      </div>
    </div>
  )
}

function ThinkingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-up">
      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center
                      flex-shrink-0 font-serif text-white text-[13px] font-semibold">
        C
      </div>
      <div className="bg-white border border-gray-200 rounded-sm rounded-tl-none
                      rounded-tr-2xl rounded-bl-2xl rounded-br-2xl
                      px-5 py-4 flex items-center gap-3">
        <div className="flex gap-1.5 items-center">
          {[0, 0.2, 0.4].map((delay, i) => (
            <span
              key={i}
              className="w-[5px] h-[5px] rounded-full bg-blue-300 animate-pulse"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
        <span className="text-[13px] text-gray-400 italic">
          Researching and synthesizing sources…
        </span>
      </div>
    </div>
  )
}