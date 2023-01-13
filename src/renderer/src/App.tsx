import { GitmojiList } from './components/GitmojiList'

function App(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-grow h-0 overflow-y-scroll">
        <GitmojiList />
      </div>
    </div>
  )
}

export default App
