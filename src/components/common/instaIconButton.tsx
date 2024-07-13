import React from 'react';
import { Button } from '../ui/button';

const InstaIconButton = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
      className={
        'bg-transparent text-black p-0 px-2 hover:bg-gray-400 rounded-full' +
        ' ' +
        className
      }
    >
      {children}
    </Button>
  );
};

export default InstaIconButton;
