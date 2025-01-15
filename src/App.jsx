import './App.css'

import RouterApp from './routes/RouterApp'
import Header from './components/Header'


// import { Link } from 'react-router-dom'

import Footer from './components/Footer'

import { BrowserRouter } from "react-router-dom";

import '../src/assets/foto-internabus.jpg'

// import MenuBoxModel from './models/MenuBoxModel/index.jsx'


export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header-fixed">
          <Header />
        </div>

        <div className="pages">
          <RouterApp />
        </div>



        <Footer />
      </BrowserRouter>
    </div>
  )
}