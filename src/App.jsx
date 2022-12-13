import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contact from './components/Contact'
import Imageswishkar from './images/mr-whiskerson.png';
import flukky from './images/fluffykins.png';
import felix from "./images/felix.png"
import pumpkin from "./images/pumpkin.png"
function App() {

  return (
    <div className="contacts">
      <Contact
        img={Imageswishkar}
        name="Mr. Whiskerson"
        phone="(212) 555 -1234"
        email="mr.whiskarz@catnap.com"
      />
      <Contact
        img={flukky}
        name="FluffyKins"
        phone="(212) 555 -1235"
        email="fluffykins@catnap.com"
      />
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555 -1236"
        email="felix@catnap.com"/>
      <Contact
        img={pumpkin}
        name="Pumpkin"
        phone="(212) 555 -1237"
        email="pumpkin@catnap.com"
      />

  </div>
  )
}

export default App
