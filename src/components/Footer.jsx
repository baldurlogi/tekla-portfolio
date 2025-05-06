import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='w-full px-5 pb-8 bg-transparent text-neutral-600 tracking-wide uppercase'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:items-start'>
            {/* Left: Direct Contact */}
            <div>
                <h3 className='uppercase tracking-wide font-semibold text-neutral-700 mb-2'>
                    Direct Contact
                </h3>
                <a href="mailto:teklakristjans@gmail.com" className='hover:text-black transition-colors'>
                    teklakristjans@gmail.com
                </a>
                <InfoLine icon={FaPhoneAlt} label="Phone"  value="+45 60 90 76 24" link="tel:+3460907624" />
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

function InfoLine({ icon: Icon, value, link }) {
    const content = (
      <>
        <Icon className="w-4 h-4 flex-none" />
        <span className="font-small">{value}</span>
      </>
    );

    return link ? (
      <a href={link} className="flex items-center gap-3 hover:underline">
        {content}
      </a>
    ) : (
      <p className="flex items-center gap-3">{content}</p>
    );
  }

export default Footer