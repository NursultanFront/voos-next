import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

interface IButton {
  bgColor: string;
  href: string;
  color: string;
  className?: string;
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  bgColor,
  href,
  color,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn('py-[9px] px-[15px] rounded-lg', className)}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </Link>
  );
};

export default Button;
