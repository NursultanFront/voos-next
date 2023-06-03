import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import cn from 'clsx';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: string;
  href: string;
  color: string;
  className?: string;
}

export const ButtonLink: FC<PropsWithChildren<IButton>> = ({
  children,
  bgColor,
  href,
  color,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn('rounded-lg', className)}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </Link>
  );
};
