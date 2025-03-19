import React from 'react'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, PhoneOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
        <div className='bg-[#412C3A] text-white p-10 pb-24 flex justify-between'>
            <div className='w-2/6'>
                <h1 className='text-2xl font-bold pb-3'>About</h1>
                <p>Melodies is a website that has been created for over <span className='text-[#EE10B0]'>5 year’s</span> now
                    and it is one of the most famous music player website’s in the world.
                    In this website you can listen and download songs for free.
                    Also of you want no limitation you can buy our <span className='text-[#0E9EEF]'>premium pass’s.</span></p>
            </div>
            <div className='flex gap-4'>
                <div>
                    <h1 className='font-bold text-2xl pb-3 text-center border-b-2'>Melodies</h1>
                    <div className='text-center text-xl'>
                        <p>Songs</p>
                        <p>Radio</p>
                        <p>Podcast</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-2xl pb-3 text-center border-b-2'>Access</h1>
                    <div className='text-center text-xl'>
                        <p>Explore</p>
                        <p>Artists</p>
                        <p>Playlists</p>
                        <p>Albums</p>
                        <p>Trending</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-2xl pb-3 text-center border-b-2'>Contact</h1>
                    <div className='text-center text-xl'>
                        <p>About</p>
                        <p>Policy</p>
                        <p>Social Media</p>
                        <p>Support</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='font-bold text-4xl pb-24 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#EE10B0] to-[#0E9EEFEB] to-70%'>Melodies</h1>
                <div className='flex justify-center gap-4 text-4xl'>
                    <FacebookOutlined/>
                    <InstagramOutlined />
                    <TwitterOutlined />
                    <PhoneOutlined />
                </div>
            </div>
        </div>
    )
}

export default Footer;