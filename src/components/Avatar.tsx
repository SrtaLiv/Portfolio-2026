export default function Avatar() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center sm:h-36 sm:w-36">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-purple-500 to-pink-500 opacity-20 blur-2xl" />
      <div className="relative flex h-full w-full items-center justify-center rounded-full border border-border bg-surface shadow-lg">
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-accent/10 to-pink-500/10" />
        <span className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          OT
        </span>
      </div>
      <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-green-500 text-xs shadow-sm">
        🚀
      </span>
    </div>
  );
}
