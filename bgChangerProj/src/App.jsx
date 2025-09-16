import { useState } from "react"


function App() {
  const [color,setColor] = useState(olive)

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}> 

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">test
        <div className="flex flex-wrap justify-center gap-4 bg-white/30 shadow-x px-3 py-2 rounded-3xl"> test
          <button
          className="outline-none px-4 "> red</button>
      </div>

    </div>
    </div>
  )
}

export default App
