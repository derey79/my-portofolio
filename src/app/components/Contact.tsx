// 'use client';

import React from 'react';
import TitleHeader from './commons/TitleHeader';

export default function Contacts() {
  return (
    <section id='skills' className='py-20'>
      <div className='custom-container mx-auto'>
        <div className='flex gap-10 '>
          <div className='border'>
            <TitleHeader
              title={
                <>
                  Let&apos;s{' '}
                  <span className='text-primary-300'>Build Something </span>
                  Great
                </>
              }
              description='Got an idea, a project, or just want to connect? I’m always open to new conversations.'
              align='left'
            />
          </div>
          <div className=' border'>
            <h3>Adresss</h3>
            <p>Jakarta, Indonesia</p>
            <h3>Contact</h3>
            <p>(+62) 123456789</p>

            <h3>Social Media</h3>
            <h3>GET IN TOUCH</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
