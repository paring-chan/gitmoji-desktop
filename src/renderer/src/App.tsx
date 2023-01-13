import { QuestionMark } from 'tabler-icons-react'
import { GitmojiList } from './components/GitmojiList'

function App(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="border-b p-4 flex">
        <div className="text-2xl font-bold flex-grow">Gitm😜ji</div>
        <div className="border w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:border-black transition-all">
          <QuestionMark />
        </div>
      </div>
      <div className="flex-grow h-0 overflow-y-scroll">
        <GitmojiList />
      </div>
    </div>
  )
}

export default App
