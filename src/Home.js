import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <Link to='./audiostream'>
        <button> audiostream </button>
      </Link>
    </div>
  )
}

export default Home