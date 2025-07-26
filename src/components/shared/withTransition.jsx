import { motion } from 'motion/react';
const _duration = 1;
export default function withTransition(Page) {
  return () => (
    <>
      <Page />
      <motion.div
        key={'div-1'}
        className='fixed top-0 left-0 w-full h-screen bg-yellow-100 origin-top'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: _duration, ease: [0.22, 1, 0.36, 1], delay: _duration }}
      />
      <motion.div
        key={'div-2'}
        className='fixed top-0 left-0 w-full h-screen bg-neutral-400 origin-top'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: _duration, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
