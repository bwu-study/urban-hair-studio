import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Urban Hair Studio</h1>
      <Link to="/test" className="mt-4 text-blue-500 underline">to test page</Link>
    </div>
  )
}

export default Home
