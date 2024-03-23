import React from 'react'

function ProgressBar({progress=40}) {
    return (
        <div className='bg-gray-400 w-full h-5 mt-3 rounded-full '>
            <div className=' bg-primary h-5 rounded-full text-[13px] text-white' 
            style={{width:`${progress}%`}}>
            {`${Number(progress).toFixed(0)}%`}
            </div>
            
        </div>
    )
}

export default ProgressBar