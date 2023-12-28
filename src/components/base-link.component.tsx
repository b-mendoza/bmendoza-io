const EXTERNAL_LINK_PROPS = {
  rel: 'noopener noreferrer',
  target: '_blank',
} satisfies Pick<React.JSX.IntrinsicElements['a'], 'rel' | 'target'>;

export type BaseLinkProps = React.JSX.IntrinsicElements['a'] & {
  /**
   * @default false
   */
  isExternal?: boolean;
};

export const BaseLink = (props: BaseLinkProps): React.JSX.Element => {
  const { children, isExternal = false, ...restOfProps } = props;

  return (
    <a {...(isExternal ? EXTERNAL_LINK_PROPS : null)} {...restOfProps}>
      <span>{children}</span>
    </a>
  );
};
