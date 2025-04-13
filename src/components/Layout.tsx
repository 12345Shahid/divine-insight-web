
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};
