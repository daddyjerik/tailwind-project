import { Link } from 'react-router-dom'

export const Home = () => (
  <nav className="flex flex-col items-center gap-4 py-10 text-xl">
    <h1 className="text-3xl font-bold">Tailwind Project</h1>
    <Link className="text-sky-700 hover:underline" to="/app">App</Link>
    <Link className="text-sky-700 hover:underline" to="/flex">Flex</Link>
    <Link className="text-sky-700 hover:underline" to="/grid">Grid</Link>
  </nav>
)