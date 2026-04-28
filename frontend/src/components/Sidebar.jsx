import { BookOpen, Plus, MessageSquare, Dot } from 'lucide-react'

export default function Sidebar({ sessions, currentSessionId, onNewChat, onLoadSession }) {
  return (
    <aside className="w-64 min-w-64 h-full bg-gray-50 border-r border-gray-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen size={15} className="text-white" strokeWidth={1.8} />
          </div>
          <span className="font-serif text-[19px] font-semibold tracking-tight text-gray-900">
            Cite<span className="text-blue-600">AI</span>
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 ml-10 -mt-0.5 mb-4">
          Research Assistant
        </p>

        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-2 px-3.5 py-2.5 bg-white border border-gray-200
                     rounded-lg text-[13.5px] text-gray-700 hover:bg-blue-50 hover:border-blue-200
                     hover:text-blue-700 transition-all duration-150 group"
        >
          <Plus size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors" strokeWidth={2} />
          New Research Session
        </button>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        {sessions.length > 0 && (
          <>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 px-2 mb-2">
              Recent Sessions
            </p>
            <nav className="space-y-0.5">
              {sessions.slice(0, 14).map(session => (
                <button
                  key={session.id}
                  onClick={() => onLoadSession(session.id)}
                  className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-left
                    text-[13px] transition-all duration-100 truncate
                    ${session.id === currentSessionId
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <MessageSquare
                    size={12}
                    className="flex-shrink-0 opacity-50"
                    strokeWidth={1.5}
                  />
                  <span className="truncate">{session.title}</span>
                </button>
              ))}
            </nav>
          </>
        )}

        {sessions.length === 0 && (
          <p className="text-xs text-gray-400 px-2 pt-1 italic">
            Your sessions will appear here
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-200">
        <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200
                        rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
          <span className="text-[11px] font-medium text-green-700">Evidence-backed AI</span>
        </div>
      </div>
    </aside>
  )
}