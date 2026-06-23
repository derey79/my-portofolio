import React from 'react';
import SectionHeader from './commons/SectionHeader';

export default function Contacts() {
  return (
    <section id='skills' className='py-20'>
      <div className='custom-container mx-auto px-4'>
        <SectionHeader
          title={
            <>
              Let&apos;s{' '}
              <span className='text-primary-300'>Build Something </span>Great
            </>
          }
          description='These are real projects where I implemented frontend interfaces with precision and attention to detail.'
        />

        {/* Content Skills */}
      </div>
    </section>
  );
}
