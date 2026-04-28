export default function CitationPanel({ sources }) {
    return (
      <div className="mt-3 border-t pt-2">
        <div className="font-semibold text-sm">Sources</div>
  
        {sources.map((src, i) => (
          <div key={i} className="text-xs text-gray-600 mt-1">
            📄 {src.content?.slice(0, 120)}...
          </div>
        ))}
      </div>
    );
  }