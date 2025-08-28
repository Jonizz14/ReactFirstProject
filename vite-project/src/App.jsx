import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome To React JS</h1>
      <h2>This is my first React app</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h3>What is React</h3>
      <p>React nima? React - bu Facebook tomonidan yaratilgan ochiq kodli JavaScript kutubxonasi <br>
      </br>bo'lib, asosan foydalanuvchi interfeyslarini (UI) yaratish uchun mo'ljallangan. U yagona sahifali<br>
      </br>ilovalar (single-page-application) va dinamik, sezgir veb-ilvalani ishlab chiqishda keng <br>
      </br>qo'llaniladi.</p>
      <h3>What is Single-Page-Application(SPA)</h3>
      <p>SPA (Single Page Application) - bu bitta sahifali veb-ilova bo'lib ,unda sahifa kontenti dinamik<br>
      </br>ravishda yangilanadi va foydalanuvchi har bir amalni butun sahifani qaytadan yuklash<br>
      </br>talab qilmaydi. JavaScript yordamida faqat kerakli kontent o'zgartiriladi, bu esa ilovani tezkor<br>
      </br>va foydalanuvchi uchun qulay qiladi.</p>
    </>
  )
}

export default App
