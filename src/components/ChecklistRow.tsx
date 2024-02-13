import { ReactNode } from 'react';
import { clsx } from 'clsx/lite';
import StatusIcon from './StatusIcon';

export default function ChecklistRow({
  title,
  status,
  isPending,
  optional,
  experimental,
  children,
}: {
  title: string
  status: boolean
  isPending: boolean
  optional?: boolean
  experimental?: boolean
  children: ReactNode
}) {
  return (
    <div className={clsx(
      'flex gap-2.5',
      'px-4 pt-2 pb-2.5',
    )}>
      <StatusIcon
        type={status ? 'checked' : optional ? 'optional' : 'missing'}
        loading={isPending}
      />
      <div className="flex flex-col min-w-0">
        <div className={clsx(
          'flex flex-wrap items-center gap-2',
          'font-bold dark:text-gray-300',
        )}>
          {title}
          {experimental &&
            <span className={clsx(
              'text-[0.7rem] font-medium uppercase tracking-wide leading-none',
              'px-[3px] py-[2px] rounded-[0.2rem]',
              'text-pink-500 dark:text-pink-800',
              'bg-pink-50 dark:bg-pink-200/90',
              'border border-pink-200/75 dark:border-pink-700/50',
            )}>
              Experimental
            </span>}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
