import React from 'react'
import { Outlet } from 'react-router-dom'
function rootlayout() {
  return (
    <>
    <Outlet />
    </>
  )
}

export default rootlayout