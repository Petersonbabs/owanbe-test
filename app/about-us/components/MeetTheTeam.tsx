import React from 'react'

const MeetTheTeam = () => {
    return (
        <div className='py-20 px-6 md:px-12'>
            <h2 className="text-3xl text-center  md:text-4xl font-bold mb-6">
                MEET THE <span className="text-[#fecc2a]">TEAM</span>
            </h2>

            <div className='flex flex-col md:flex-row justify-between max-w-[1100px] mx-auto gap-4 md:gap-8 items-center my-8'>
                <div className='max-w-[200px] md:max-w-[350px]'>
                    <img src="/homepage/team.png" alt="" className='w-full' />
                </div>
                <div className='max-w-[200px] md:max-w-[350px]'>
                    <img src="/homepage/team.png" alt="" className='w-full' />
                </div>
                <div className='max-w-[200px] md:max-w-[350px]'>
                    <img src="/homepage/team.png" alt="" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam