import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  target?: string
  rel?: string
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  target,
  rel
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-300 rounded-lg inline-flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-servicenow-600 hover:bg-servicenow-700 text-white dark:bg-servicenow-500 dark:hover:bg-servicenow-600',
    secondary: 'bg-isb-600 hover:bg-isb-700 text-white dark:bg-isb-500 dark:hover:bg-isb-600',
    outline: 'border-2 border-servicenow-600 text-servicenow-600 hover:bg-servicenow-50 dark:hover:bg-slate-900'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const buttonClass = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      
        href={href}
        target={target}
        rel={rel}
        className={buttonClass}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  )
}
