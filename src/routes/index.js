import Home from "../components/Admin/Home";
import LayoutAdmin from "../layout/LayoutAdmin";
import ResumeAdmin from "../pages/Admin/Resume";
import MainCV from "../pages/MainCV";

export const routes = [
  {
    path: "/",
    element: <MainCV />,
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "resume",
        element: <ResumeAdmin />,
      },
    ],
  },
];
