import { motion } from 'framer-motion'

const LiveStreamWave = () => {
  return (
    <div className='flex items-end gap-[2px] bottom-0.5 absolute'>
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className='w-[2px] bg-white'
          animate={{ height: [5, 15, 5] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: i * 0.2
          }}
        ></motion.div>
      ))}
    </div>
  )
}

export default LiveStreamWave
