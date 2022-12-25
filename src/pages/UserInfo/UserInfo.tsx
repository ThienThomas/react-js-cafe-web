import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const UserInfo = () => {
  return (
    <div >
        <div className="container mx-auto flex  relative  ">
            <div className=" w-3/12 bg-slate-500/10 shadow-md">
                <Sidebar/>
            </div>
            <div className="w-9/12 px-10">

            <Content/>
            </div>
        </div>
    </div>
  )
}

export default UserInfo