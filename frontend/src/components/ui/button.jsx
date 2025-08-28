import React from 'react';

/**
 * Button component with brand variants & sizes
 */
const base =
  'inline-flex items-center justify-center font-semibold tracking-tight rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed';

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-12 px-8 text-lg',
};

const variants = {
  primary:
    'bg-[var(--brand-teal)] text-white hover:bg-[var(--brand-teal-dark)] focus:ring-[var(--brand-teal)]',
  secondary:
    'bg-[var(--brand-navy)] text-white hover:bg-[var(--brand-navy-dark)] focus:ring-[var(--brand-teal)]',
  accent:
    'bg-[var(--brand-sand)] text-[var(--brand-navy)] hover:brightness-95 focus:ring-[var(--brand-teal)]',
  outline:
    'bg-transparent border-2 border-[var(--brand-navy)] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white focus:ring-[var(--brand-teal)]',
  ghost:
    'bg-transparent text-[var(--brand-navy)] hover:bg-gray-100 focus:ring-[var(--brand-teal)]',
  link:
    'bg-transparent text-[var(--brand-teal)] hover:underline underline-offset-4 px-0 focus:ring-[var(--brand-teal)]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
