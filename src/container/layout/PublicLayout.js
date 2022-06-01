import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div>
        this is alyot
        <Outlet />
    </div>
  )
}

export default PublicLayout