import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/Home";
import { LibraryPage } from "./pages/Library";
import { MusicPage } from "./pages/Music";
import { NewMusicPage } from "./pages/NewMusic";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "library",
        children: [
          {
            index: true,
            element: <LibraryPage />,
          },
          {
            path: ":musicId",
            element: <MusicPage />,
          },
        ],
      },
      {
        path: "newMusic",
        element: <NewMusicPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;
