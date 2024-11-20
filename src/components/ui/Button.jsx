import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-secondary text-primary hover:bg-secondary/90',
  outline: 'border border-secondary text-secondary hover:bg-secondary/10',
  ghost: 'text-textSecondary hover:text-secondary',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-md font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-secondary/50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
