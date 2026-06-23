import StatusIcon from './ComparisonStatusIcon';

interface ComparisonItem {
  skill: string;
  withMe: boolean;
  other: boolean;
}

interface ComparisonTableProps {
  items: ComparisonItem[];
}

export default function ComparisonTable({ items }: ComparisonTableProps) {
  return (
    <div className='overflow-hidden bg-base-background'>
      <table className='w-full table-fixed'>
        <thead>
          <tr className='border-b border-neutral-800'>
            <th className='thead-title'>Skill</th>

            <th className='thead-title bg-primary-400'>With Me</th>

            <th className='thead-title'>Other</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.skill} className='border-b border-neutral-800'>
              <td className='text-sm md:text-lg px-6 py-5'>{item.skill}</td>

              <td className='px-6 py-5 bg-primary-400'>
                <StatusIcon active={item.withMe} />
              </td>

              <td className='px-6 py-5'>
                <StatusIcon active={item.other} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
