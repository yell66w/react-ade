const Key = ({
  cols = 1,
  extendedClassName = "",
  overrideClassName = "",
  type = "",
  onClick,
  children,
}) => {
  const color =
    type === "equals"
      ? "bg-green-500 hover:bg-green-400"
      : type === "operator"
      ? "bg-amber-500 hover:bg-amber-400"
      : type === "fn-key"
      ? "bg-zinc-700 hover:bg-zinc-600"
      : "bg-zinc-800 hover:bg-zinc-700";
  const columns = cols == 2 ? "col-span-2" : "col-span-1";
  return (
    <div
      onClick={onClick}
      className={
        overrideClassName
          ? overrideClassName
          : `${color} ${extendedClassName} ${columns} cursor-pointer transition ease-linear duration-100  h-14 flex items-center justify-center font-bold rounded-2xl`
      }
    >
      {children}
    </div>
  );
};

export default Key;
