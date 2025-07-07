import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{backgroundColor: "Red"}}
            onClick={() => setColor("red")}
            >Red</button>
            <button className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{backgroundColor: "Green"}}
            onClick={() => setColor("green")}
            >Green</button>
            <button className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{backgroundColor: "Blue"}}
            onClick={() => setColor("blue")}
            >Blue</button>
          </div>
        </div>
      </div>
    </>
  )
} 
 //ClassName explainations : fixed: This makes the box stick to the screen no matter how you scroll. Like a sticker stuck on your monitor, flex: This tells the box to arrange things in a row, like people standing in a line, flex-wrap: If there’s not enough space, the items inside will move to the next line instead of being squished. Like wrapping presents when one doesn't fit
export default App
