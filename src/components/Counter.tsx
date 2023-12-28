type CounterProps = React.PropsWithChildren<{
  count: number;
}>;

export const Counter = ({
  children,
  count: initialCount,
}: CounterProps): React.JSX.Element => {
  return (
    <>
      <div className="counter">
        <button>-</button>
        <pre>{initialCount}</pre>
        <button>+</button>
      </div>

      <div className="counter-message">{children}</div>
    </>
  );
};
