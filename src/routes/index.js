import LayoutAdmin from "../layout/LayoutAdmin";
import ResumeAdmin from "../pages/Admin/Resume";
import MainCV from "../pages/MainCV";
import Profile from "../pages/Admin/Profile";
import Features from "../pages/Admin/Feautures";
import Contacts from "../pages/Admin/Contacts";
import Project from "../pages/Admin/Project";
import Auth from "../pages/Auth";
import PrivateRoute from "../pages/Private";

export const routes = [
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/detail/:slug",
    element: <MainCV />,
  },
  {
    path: "/admin",
    element: <PrivateRoute />, // PrivateRoute bảo vệ toàn bộ các route con
    children: [
      {
        path: "", // Đường dẫn này sẽ tương đương với "/admin" (không cần "/")
        element: <LayoutAdmin />,
        children: [
          {
            path: "profile", // Không dùng đường dẫn tuyệt đối "/profile"
            element: <Profile />,
          },
          {
            path: "resume", // Không dùng đường dẫn tuyệt đối "/resume"
            element: <ResumeAdmin />,
          },
          {
            path: "features", // Không dùng đường dẫn tuyệt đối "/features"
            element: <Features />,
          },
          {
            path: "contacts", // Không dùng đường dẫn tuyệt đối "/contacts"
            element: <Contacts />,
          },
          {
            path: "project", // Không dùng đường dẫn tuyệt đối "/project"
            element: <Project />,
          },
        ],
      },
    ],
  },
];
