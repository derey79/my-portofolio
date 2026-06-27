import Image from 'next/image';
// import { FAQ_DATA } from "@/app/constants/faq";
import { FAQItem } from '@/app/constants/faq';

interface FAQCardProps {
  faq: FAQItem;
  isActive: boolean;
  onClick: () => void;
}

export default function FAQCard({ faq, isActive, onClick }: FAQCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-between p-8 rounded-none border border-neutral-800 cursor-pointer transition-all duration-500 select-none w-full min-h-95 ${
        isActive
          ? 'bg-primary-400 border-primary-400 text-white' // Gaya saat aktif
          : 'bg-transparent text-neutral-400 hover:border-neutral-700' // Gaya saat idle
      }`}
    >
      <div className='flex justify-between items-start w-full'>
        {isActive ? (
          // Tampilkan foto profil bundar jika aktif
          <div className='relative w-20 h-20 rounded-full overflow-hidden bg-primary-300'>
            <Image
              src='/icons/profile.png'
              alt='Avatar'
              fill
              className='object-cover'
            />
          </div>
        ) : (
          // Ikon Chat standar jika tidak aktif
          <div className='mb-4 w-10 h-10'>
            <Image
              src='/icons/message.png'
              alt=''
              width={40}
              height={40}
              className='object-contain transition-transform duration-200 group-hover:scale-125'
            />
          </div>
        )}

        <div
          className={`text-xl ${isActive ? 'text-white' : 'text-neutral-500'}`}
        >
          {isActive && (
            <div className='mb-4 w-10 h-10'>
              <Image
                src='/icons/message.png'
                alt=''
                width={40}
                height={40}
                className='object-contain transition-transform duration-200 group-hover:scale-125'
              />
            </div>
          )}
        </div>
      </div>

      {/* Bagian Bawah Kartu (Teks Tanya & Jawab) */}
      <div className='mt-8 space-y-4'>
        <h3
          className={`text-xl font-bold leading-snug ${isActive ? 'text-white' : 'text-neutral-100'}`}
        >
          {faq.question}
        </h3>

        {/* Teks jawaban otomatis meluncur halus saat aktif */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isActive ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className='text-sm leading-relaxed opacity-90 font-light'>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
