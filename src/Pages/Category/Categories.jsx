import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Category() {
  return (
    <div className="p-6">
      
      <Outlet />
    </div>
  )
}

export default Category
