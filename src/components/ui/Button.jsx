import React from 'react';

/**
 * Reusable Button component with consistent styling
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant ('primary' | 'secondary')
 * @param {string} props.size - Button size ('sm' | 'md' | 'lg')
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.type - Button type
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  // Base button styles
  const baseStyles = 'flex cursor-pointer items-center justify-center overflow-hidden rounded-full font-bold leading-normal tracking-[0.015em] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
    secondary: 'bg-dark-accent text-text-primary hover:bg-dark-secondary focus:ring-accent-500 border border-gray-600'
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'h-8 px-3 text-xs min-w-[60px] max-w-[320px]',
    md: 'h-10 px-4 text-sm min-w-[84px] max-w-[480px]',
    lg: 'h-12 px-5 text-base min-w-[100px] max-w-[600px]'
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
