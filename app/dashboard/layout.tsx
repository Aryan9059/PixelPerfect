import React, {ReactNode} from 'react'
import Sidebar from "@/components/dashboard/sidebar"

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='min-h-screen w-full'>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1">
            {children}
        </div>
      </div>
    </div>
  )
}

export default layout
