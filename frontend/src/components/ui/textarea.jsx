import React, { forwardRef } from 'react';

export const Textarea = forwardRef(function Textarea(
  { className = '', rows = 4, ...props },
  ref
) {
  const base =
    'block w-full rounded-xl bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm outline-none transition-colors';
  const borders =
    'border-2 border-gray-200 focus:border-[var(--brand-teal)]';
  const ring =
    'focus:ring-2 focus:ring-[var(--brand-teal)] focus:ring-offset-0 resize-none';

  return (
    <textarea
      ref={ref}
      rows={rows}
      className={`${base} ${borders} ${ring} ${className}`}
      {...props}
    />
  );
});
