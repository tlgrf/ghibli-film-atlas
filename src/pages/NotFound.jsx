import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="space-y-4 text-center py-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-sakura-500 to-ocean-500 bg-clip-text text-transparent">404</h1>
      <p className="text-mist-50/80 text-lg">That page drifted away with the forest spirits.</p>
      <Link to="/" className="inline-flex px-4 py-2 rounded-md bg-ocean-600 text-white text-sm font-medium hover:bg-ocean-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400">
        Back Home
      </Link>
    </div>
  )
}
