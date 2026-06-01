import React from 'react';
import { FaCheck, FaTimes, FaHourglassHalf, FaInfo } from 'react-icons/fa';

interface StatusBadgeProps {
  status: string;
  className?: string;
  withIcons?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const STATUS_GROUPS = {
  success: {
    statuses: [
      'success',
      'accepted',
      'active',
      'completed',
      'approved',
      'paid',
      'personal project',
    ],
    styles: 'bg-success-light/10 text-success border-success',
    icon: <FaCheck />,
  },
  error: {
    statuses: [
      'failed',
      'rejected',
      'declined',
      'error',
      'inactive',
      'unpaid',
      'undefined',
      'unknown',
    ],
    styles: 'bg-error-light/10 text-error border-error',
    icon: <FaTimes />,
  },
  primary: {
    statuses: [
      'processing',
      'pending',
      'waiting',
      'in_review',
      'on leave',
      'partial',
      'coming soon',
      'in development',
    ],
    styles: 'bg-warning-light/10 text-warning border-warning',
    icon: <FaHourglassHalf />,
  },
};

const FALLBACK = {
  styles: 'bg-white text-blue-500 border-blue-500',
  icon: <FaInfo />,
};

const SIZE_STYLES = {
  small: {
    size: 'px-2 py-0.5',
    text: 'text-[10px]',
    icon: 10,
  },
  medium: {
    size: 'px-3 py-1',
    text: 'text-xs',
    icon: 12,
  },
  large: {
    size: 'px-4 py-2',
    text: 'text-sm',
    icon: 14,
  },
} as const;

export default function StatusBadge({
  status,
  className = '',
  size = 'medium',
  withIcons = true,
}: StatusBadgeProps) {
  const normalized = status.toLowerCase().replace(/_/g, ' ').trim();

  const group =
    Object.values(STATUS_GROUPS).find((g) => g.statuses.includes(normalized)) ||
    FALLBACK;

  const s = SIZE_STYLES[size];

  const SizedIcon = withIcons
    ? React.cloneElement(group.icon, { size: s.icon, stroke: '1px' })
    : null;

  return (
    <div
      className={`
        ${s.size} ${s.text} gap-1 rounded-full flex items-center justify-center border font-medium capitalize
        ${group.styles}
        ${className}
      `}
    >
      {SizedIcon}
      {normalized}
    </div>
  );
}
