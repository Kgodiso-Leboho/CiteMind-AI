import { useState } from "react";

export default function Workspace() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex-1 flex flex-col p-6">

      {/* Header */}
      <div className="text-sm text-gray-400 mb-4">
        RESEARCH QUERY ENGINE
      </div>

      {/* Input */}
      <div className="bg-[#111827] p-4 rounded-xl border border-gray-800">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter research question..."
          className="w-full bg-transparent outline-none text-white"
        />
      </div>

      {/* Output Area */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        {/* AI Analysis */}
        <div className="bg-[#111827] p-4 rounded-xl border border-gray-800">
          <div className="text-green-400 text-sm mb-2">
            AI ANALYSIS
          </div>
          <p className="text-sm text-gray-300">
            Results will appear here after querying the RAG system...
          </p>
        </div>

        {/* Evidence Panel */}
        <div className="bg-[#111827] p-4 rounded-xl border border-gray-800">
          <div className="text-blue-400 text-sm mb-2">
            EVIDENCE SOURCES
          </div>

          <ul className="text-xs text-gray-400 space-y-2">
            <li>• Retrieved document chunks</li>
            <li>• Embedding similarity scores</li>
            <li>• Source references</li>
          </ul>
        </div>

      </div>

    </div>
  );
}