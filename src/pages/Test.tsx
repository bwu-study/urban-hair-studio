import { Link } from 'react-router-dom'

function Test() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Test Page</h1>
      <Link to="/" className="mt-4 text-blue-500 underline">to home page</Link>
    </div>
  )
}

export default Test
