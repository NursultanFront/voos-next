import cn from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

interface IColumn {
  size: number;
  className?: string;
  isCenter?: boolean;
  isPadding?: boolean;
}

const Column: FC<PropsWithChildren<IColumn>> = ({
  size,
  children,
  isCenter = true,
  className,
  isPadding = true,
}) => {
  return (
    <div style={{ gridColumn: `span ${size} / span ${size}` }} className={cn()}>
      {children}
    </div>
  );
};

export default Column;
