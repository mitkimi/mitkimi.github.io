'use client';

import { ReactNode } from 'react';
import styles from './Glass.module.scss';

interface GlassProps {
  children: ReactNode;
  className?: string;
}

export default function Glass({ children, className = '' }: GlassProps) {
  return (
    <div className={`${styles.glass} ${className}`}>
      {children}
    </div>
  );
}
