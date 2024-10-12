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
        path: "resume",
        element: <ResumeAdmin />,
      },
    ],
  },
];
