import { cn } from '~/utils/cn';

type Variant = 'body' | 'subtitle';

type Size = 'sm' | 'md' | 'lg';

export const PARAGRAPH_SIZES = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
} satisfies Record<Size, string>;

export const PARAGRAPH_VARIANTS = {
  subtitle: 'font-semibold uppercase',
} satisfies Partial<Record<Variant, string>>;

const hasVariant = (
  variant: Variant,
): variant is keyof typeof PARAGRAPH_VARIANTS => variant in PARAGRAPH_VARIANTS;

type ParagraphProps = React.JSX.IntrinsicElements['p'] & {
  /**
   * The variant of the paragraph to render.
   * @default 'md'
   */
  size?: Size;
  /**
   * The variant of the paragraph to render.
   * @default 'body'
   */
  variant?: Variant;
};

export const Paragraph = (props: ParagraphProps) => {
  const {
    children,
    className,
    size = 'md',
    variant = 'body',
    ...restOfProps
  } = props;

  return (
    <p
      className={cn(
        PARAGRAPH_SIZES[size],
        hasVariant(variant) ? PARAGRAPH_VARIANTS[variant] : undefined,
        className,
      )}
      {...restOfProps}
    >
      {children}
    </p>
  );
};
