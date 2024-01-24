import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";

export function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
