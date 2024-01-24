import "./App.css";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/Home";
import { LibraryPage } from "./pages/Library";
import { MusicPage } from "./pages/Music";
import { NewMusicPage } from "./pages/NewMusic";

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
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/test")
      .then((res) => {
        console.log(res);
        res.text();
      })
      .then((m) => setMessage(m));
    fetch("/prac")
      .then((res) => console.log(res));
  }, []);
  return <RouterProvider router={router} />;
}
export default App;
