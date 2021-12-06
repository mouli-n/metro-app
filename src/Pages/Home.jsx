import { useState } from "react";

function Home() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => setState((oldState) => oldState++), 100);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <p>{state}</p>
    </div>
  );
}

export default Home;
