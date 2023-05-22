import cn from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface IRow {
  className?: string;
  isBorder?: boolean;
}

const Row: FC<PropsWithChildren<IRow>> = ({ children, className }) => {
  return (
    <div className={cn('grid  w-full grid-cols-12', className)}>{children}</div>
  );
};

export default Row;
