// components/common/StatusIcon.tsx

import Image from 'next/image';

interface StatusIconProps {
  active: boolean;
}

export default function StatusIcon({ active }: StatusIconProps) {
  return (
    <Image
      src={active ? '/icons/checklist.png' : '/icons/not.png'}
      alt={active ? 'Available' : 'Not Available'}
      width={40}
      height={40}
    />
  );
}
