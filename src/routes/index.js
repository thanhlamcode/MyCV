import LayoutAdmin from "../layout/LayoutAdmin";
import ResumeAdmin from "../pages/Admin/Resume";
import MainCV from "../pages/MainCV";
import Profile from "../pages/Admin/Profile";

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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "resume",
        element: <ResumeAdmin />,
      },
    ],
  },
];
