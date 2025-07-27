import { PlusIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useFloat } from '../hooks/useFloat';

export function FloatingButton({ onClick }) {
  const { buttonRef, constraints } = useFloat();

  return (
    <motion.div
      ref={buttonRef}
      drag
      dragConstraints={constraints}
      className='fixed right-4 bottom-12 touch-none'>
      <div
        onClick={onClick}
        className='bg-yellow-100 text-neutral-950 shadow  rounded-full p-3 cursor-pointer'>
        <PlusIcon size={32} />
      </div>
    </motion.div>
  );
}
