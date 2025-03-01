import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Categories() {
  return (
    <div>
      <h1>hallo</h1>
      <nav>
        <Link to="shoes">Shoe</Link>
        <Link to="clothes">Clothes</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Categories
