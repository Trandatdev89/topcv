import LayoutDefault from "../layout/layoutDefault";
import Company from "../page/Company";
import CompanyDetail from "../page/Company/CompanyDetail";
import Home from "../page/Home";
import Jobs from "../page/Jobs";
import Login from "../page/Login";
import Logout from "../page/Logout";
import Register from "../page/Register";
import Search from "../page/Search";
import PrivateRouter from "../Components/PrivateRouter/index";
import LayoutAdmin from "../layout/layoutAdmin";
import DashBoard from "../Components/PrivateRouter/DashBoard";
import ManageCV from "../Admin/ManageCv";
import ManageJobs from "../Admin/ManageJobs";
import InfoCompany from "../Admin/InfoCompany";
import CreateJob from "../Admin/CreateJobs";
import JobDetails from "../Admin/JobDetails";
import CVDetail from "../Admin/CVDetail";
import GoodJob from "../page/Home/GoodJob";
import Blog from "../page/Blog";
export const router = [
  //public:
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/jobs/:id",
        element: <Jobs />,
      },
      {
        path: "/jobs",
        element: <GoodJob/>,
      },
      {
        path: "/company/:id",
        element: <CompanyDetail />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog/>,
      }
    ],
  },
  {
    element: <PrivateRouter />,
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          {
            path: "/admin",
            element: <DashBoard />,
          },
          {
            path: "/managecv",
            element: <ManageCV />,
          },
          {
            path: "/managejob",
            element: <ManageJobs />,
          },
          {
            path: "/createjob",
            element: <CreateJob />,
          },
          {
            path: "/infocompany",
            element: <InfoCompany />,
          },
          {
            path: "/jobdetails/:id",
            element: <JobDetails />,
          },
          {
            path: "/cvdetail/:id",
            element: <CVDetail/>,
          },
        ],
      },
    ],
  },
];
