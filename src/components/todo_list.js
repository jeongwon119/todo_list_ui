import React from 'react'

function Todo_list() {
    return ( 
        <>
            <div className='w-full h-full bg-[#339AFA] relative'>
                <div className='w-full h-[10%] flex justify-center items-center'>
                    <div className='w-fit h-fit'>
                        <h1 className='text-white text-[46px]'>TODO LIST</h1>
                    </div>
                </div>
                <div className='w-full h-[75%] flex justify-center items-center'>
                    <div className='w-[663px] h-[661px] bg-white flex items-start justify-center'>
                        <ol className='mt-[10%]'>
                          {}
                        </ol>
                    </div>
                </div>
                <div className='w-full h-[15%] flex justify-center relative'>
                    <div>
                        <input type="text" className='w-[663px] h-[60px] rounded-full pl-[20px] text-[30px]'/>
                    </div>
                </div>
                <div className='absolute top-[86%] right-[13%] flex flex-row'>
                    <button className='w-[120px] h-[50px] bg-[#227AFF] text-[20px] text-white mr-[2%]'>CREATE</button>
                    <button className='w-[120px] h-[50px] bg-[#FA3E3E] text-[20px] text-white mr-[2%]'>DELETE</button>
                    <button className='w-[120px] h-[50px] bg-[#A2EC2A] text-[20px] text-white'>CHANGE</button>
                </div>
            </div>
        </>
    )
}

export default Todo_list