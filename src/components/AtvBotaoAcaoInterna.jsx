import { motion } from 'framer-motion';

export default function AtvBotaoAcaoInterna() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '32px 24px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(12px)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow)',
    width: '100%',
    maxWidth: '320px',
    margin: '0 auto',
    boxSizing: 'border-box',
  };

  const textStyle = {
    fontSize: '16px',
    color: 'var(--text)',
    margin: '0',
    fontWeight: '500',
    letterSpacing: '0.2px',
  };

  const buttonStyle = {
    padding: '14px 32px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#fff',
    background: 'linear-gradient(135deg, var(--accent) 0%, #aa3bff 100%)',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(170, 59, 255, 0.25)',
    outline: 'none',
  };

  const handleClick = () => {
    alert('Fui clicado!');
  };

  return (
    <motion.div 
      style={containerStyle}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, borderColor: 'var(--accent-border)' }}
    >
      <p style={textStyle}>Clique abaixo</p>
      <motion.button
        style={buttonStyle}
        onClick={handleClick}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(170, 59, 255, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        Clique aqui
      </motion.button>
    </motion.div>
  );
}
