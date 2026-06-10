import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export function calculateDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = endDate === 'present' ? new Date() : new Date(endDate)
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  }
  
  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`
  }
  
  return `${years}y ${remainingMonths}m`
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'product-management': 'bg-servicenow-100 text-servicenow-900',
    'business-analysis': 'bg-isb-100 text-isb-900',
    'ai-products': 'bg-iiit-100 text-iiit-900',
    'consulting': 'bg-iim-100 text-iim-900',
    'engineering': 'bg-gray-100 text-gray-900',
  }
  return colors[category] || 'bg-gray-100 text-gray-900'
}

export function getCategoryBorder(category: string): string {
  const colors: Record<string, string> = {
    'product-management': 'border-servicenow-500',
    'business-analysis': 'border-isb-500',
    'ai-products': 'border-iiit-500',
    'consulting': 'border-iim-500',
    'engineering': 'border-gray-500',
  }
  return colors[category] || 'border-gray-500'
}
