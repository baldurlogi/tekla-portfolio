import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='w-full px-20 pt-16 pb-8 bg-transparent text-neutral-600 tracking-wide uppercase'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:items-start'>
            {/* Left: Direct Contact */}
            <div>
                <h3 className='uppercase tracking-wide font-semibold text-neutral-700 mb-2'>
                    Direct Contact
                </h3>
                <a href="mailto:teklakristjans@gmail.com" className='hover:text-black transition-colors'>
                    teklakristjans@gmail.com
                </a>
            </div>

            {/* Right: Social Links */}
            <div className='flex gap-4'>
                <a
                    href="https://instagram.com/teklakristjans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='hover:text-black transition'
                >
                    <FaInstagram size={20} />
                </a>
                <a
                    href="https://instagram.com/teklakristjans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='hover:text-black transition'
                >
                    <FaTiktok size={20} />
                </a>
            </div>
        </div>

        {/* Divider + Bottom Line */}
        <hr className='my-10 border-neutral-200' />

        <p className='text-center uppercase tracking-wide text-xs text-neutral-400'>
        The Official Website of TEKLA | © {new Date().getFullYear()} All Rights Reserved | Developed by&nbsp;
            <a
                href="https://baldurlogi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
            >
                Baldur&nbsp;Logi
            </a>
        </p>
    </footer>
  )
}

export default Footer