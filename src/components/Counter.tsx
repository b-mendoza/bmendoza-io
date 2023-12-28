export const Counter = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  return (
    <>
      <div className="counter">
        <button>-</button>
        <pre>0</pre>
        <button>+</button>
      </div>

      <div className="counter-message">{children}</div>
    </>
  );
};
