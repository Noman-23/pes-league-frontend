import * as React from 'react';
import { cn } from '@/lib/utils';

const Field = React.forwardRef(({ className, orientation = 'vertical', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex gap-3',
      orientation === 'horizontal' ? 'flex-row items-start' : 'flex-col',
      className
    )}
    {...props}
  />
));
Field.displayName = 'Field';

const FieldLabel = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'flex items-start cursor-pointer rounded-lg border border-neutral-700 p-4 transition-all hover:bg-neutral-900 has-[:checked]:border-yellow-100 has-[:checked]:bg-yellow-100/5',
      className
    )}
    {...props}
  />
));
FieldLabel.displayName = 'FieldLabel';

const FieldContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col gap-1 flex-1', className)} {...props} />
));
FieldContent.displayName = 'FieldContent';

const FieldTitle = React.forwardRef(({ className, ...props }, ref) => (
  <span ref={ref} className={cn('font-medium text-neutral-100', className)} {...props} />
));
FieldTitle.displayName = 'FieldTitle';

const FieldDescription = React.forwardRef(({ className, ...props }, ref) => (
  <span ref={ref} className={cn('text-sm text-neutral-400', className)} {...props} />
));
FieldDescription.displayName = 'FieldDescription';

export { Field, FieldLabel, FieldContent, FieldTitle, FieldDescription };
