import SectionHeader from './commons/SectionHeader';

export default function Project() {
  return (
    <section id='skills' className='py-20'>
      <div className='custom-container mx-auto px-4'>
        <SectionHeader
          title={
            <>
              Let&apos;s Build{' '}
              <span className='text-primary-300'>Something Great</span>
            </>
          }
          description='These are real projects where I implemented frontend interfaces with precision and attention to detail.'
        />

        {/* Content Skills */}
      </div>
    </section>
  );
}
