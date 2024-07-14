import React from 'react';
import { Button } from '../ui/button';

interface InstaIconButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}
const InstaIconButton: React.FC<InstaIconButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <Button
      className={
        'bg-transparent text-black p-0 px-2 hover:bg-gray-400 rounded-full' +
        ' ' +
        className
      }
      {...props}
    >
      {children}
    </Button>
  );
};

export default InstaIconButton;
