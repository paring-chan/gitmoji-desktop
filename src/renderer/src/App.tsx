import { Link, Outlet } from 'react-router-dom'
import { QuestionMark } from 'tabler-icons-react'

function App(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="border-b p-4 flex">
        <Link to="/" className="text-2xl font-bold">
          Gitm😜ji
        </Link>
        <div className="flex-grow" />
        <Link
          to="/help"
          className="border w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:border-black transition-all"
        >
          <QuestionMark />
        </Link>
      </div>
      <div className="flex-grow h-0 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default App
