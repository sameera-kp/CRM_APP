import React from 'react';
import DashboardLayout from '@/components/shared/layout/DashboardLayout';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
};

export default Layout;