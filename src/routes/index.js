import LayoutAdmin from "../layout/LayoutAdmin";
import ResumeAdmin from "../pages/Admin/Resume";
import MainCV from "../pages/MainCV";
import Profile from "../pages/Admin/Profile";
import Features from "../pages/Admin/Feautures";
import Contacts from "../pages/Admin/Contacts";
import Project from "../pages/Admin/Project";

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
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "project",
        element: <Project />,
      },
    ],
  },
];
