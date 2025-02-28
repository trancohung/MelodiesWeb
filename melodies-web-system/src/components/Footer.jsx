import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#412C3A] text-white p-10 flex gap-4'>
            <div className='w-2/6'>
                <h1 className='text-4xl font-bold pb-3'>About</h1>
                <p>Melodies is a website that has been created for over <span className='text-[#EE10B0]'>5 year’s</span> now
                    and it is one of the most famous music player website’s in the world.
                    In this website you can listen and download songs for free.
                    Also of you want no limitation you can buy our <span className='text-[#0E9EEF]'>premium pass’s.</span></p>
            </div>
            <div className='flex gap-8'>
                <div>
                    <h1 className='font-bold text-4xl pb-3 border-b-2'>Melodies</h1>
                    <div className='text-center text-2xl'>
                        <p>Songs</p>
                        <p>Radio</p>
                        <p>Podcast</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-4xl pb-3 border-b-2'>Access</h1>
                    <div className='text-center text-2xl'>
                        <p>Explore</p>
                        <p>Artists</p>
                        <p>Playlists</p>
                        <p>Albums</p>
                        <p>Trending</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-4xl pb-3 border-b-2'>Contact</h1>
                    <div className='text-center text-2xl'>
                        <p>About</p>
                        <p>Policy</p>
                        <p>Social Media</p>
                        <p>Support</p>
                    </div>
                </div>
            </div>
            <div className=''>
                melodies
            </div>
        </div>
    )
}

export default Footer