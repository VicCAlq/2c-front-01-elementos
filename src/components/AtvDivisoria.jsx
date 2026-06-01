import { motion } from 'framer-motion';

export default function AtvDivisoria({ largura }) {
  const percentLeft = Math.max(10, Math.min(90, Number(largura) || 50));
  const percentRight = 100 - percentLeft;

  const containerStyle = {
    display: 'flex',
    width: '90vw',
    maxWidth: '100%',
    height: '56px',
    borderRadius: '28px',
    overflow: 'hidden',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow)',
    margin: '16px auto',
    background: 'var(--code-bg)',
    boxSizing: 'border-box',
  };

  const leftStyle = {
    height: '100%',
    background: 'linear-gradient(135deg, var(--accent) 0%, #aa3bff 50%, #8b2fd9 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    boxShadow: 'inset -5px 0 15px rgba(0, 0, 0, 0.15)',
  };

  const rightStyle = {
    height: '100%',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text)',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.5px',
  };

  return (
    <motion.div 
      style={containerStyle}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        style={leftStyle}
        initial={{ width: '0%' }}
        animate={{ width: `${percentLeft}%` }}
        transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      >
        <span>{percentLeft}%</span>
      </motion.div>
      <motion.div 
        style={rightStyle}
        initial={{ width: '100%' }}
        animate={{ width: `${percentRight}%` }}
        transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      >
        <span>{percentRight}%</span>
      </motion.div>
    </motion.div>
  );
}
