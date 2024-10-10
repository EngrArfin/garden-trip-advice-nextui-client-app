export default function container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}
