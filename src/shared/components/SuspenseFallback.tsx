// IMPORTS

export const SuspenseFallback = () => {
  const content = (
    <div className="suspense">
      <h1 style={{ color: "white" }}>Loading...</h1>
    </div>
  );
  return content;
};
