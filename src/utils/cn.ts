import type { ClassArray } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classNames: ClassArray) => twMerge(clsx(classNames));
