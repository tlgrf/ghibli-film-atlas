// shared UI components for loading, error, and empty states.
export function Loading({ label = 'Loading…' }) {
  return (
    <p
      className="animate-pulse text-soot-600 text-sm"
      role="status"
      aria-live="polite"
    >
      {label}
    </p>
  )
}

export function ErrorBlock({ error, onRetry }) {
  return (
    <div
      className="p-4 border border-red-300 bg-red-50 rounded-lg text-sm text-red-700 space-y-2"
      role="alert"
      aria-live="assertive"
    >
      <p className="font-semibold">Error</p>
      <p>{error}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-3 py-1.5 rounded-md bg-red-600 text-white text-xs font-medium hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
        >
          Retry
        </button>
      )}
    </div>
  )
}

export function EmptyState({ icon = '🛈', title, children, action }) {
  return (
    <div className="p-6 text-center border border-mist-200 bg-white/80 rounded-xl shadow-sm space-y-2">
      <div className="text-3xl" aria-hidden="true">{icon}</div>
      <h3 className="font-semibold text-soot-700">{title}</h3>
      <div className="text-soot-600 text-sm">{children}</div>
      {action && <div>{action}</div>}
    </div>
  )
}
