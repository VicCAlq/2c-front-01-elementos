import { motion } from 'framer-motion';

export default function AtvParagrafo({ titulo, conteudo }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '28px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(12px)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow)',
    textAlign: 'left',
    width: '100%',
    maxWidth: '640px',
    margin: '0 auto',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '600',
    color: 'var(--text-h)',
    margin: '0',
    lineHeight: '1.25',
    letterSpacing: '-0.8px',
  };

  const contentStyle = {
    fontSize: '16px',
    color: 'var(--text)',
    margin: '0',
    lineHeight: '1.65',
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -4, borderColor: 'var(--accent-border)' }}
    >
      <h1 style={titleStyle}>{titulo}</h1>
      <p style={contentStyle}>{conteudo}</p>
    </motion.div>
  );
}
