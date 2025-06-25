// IMPORTS
import { Outlet, useMatches } from "react-router-dom";
import Sidebar from "@/shared/components/Sidebar/Sidebar";
import Header from "@/shared/components/Header/Header";

// TYPES
type MatchWithHandle = {
  handle?: {
    title?: string;
  };
};

const AppLayout = () => {
  // CONSTS
  const matches = useMatches();

  const currentTitle =
    ([...matches] as MatchWithHandle[])
      .reverse()
      .find((match) => match.handle?.title)?.handle?.title ?? "";

  return (
    <main className="main">
      <Sidebar />
      <div className="main__content">
        <Header title={currentTitle} />

        <div style={{ marginTop: "2rem" }}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
