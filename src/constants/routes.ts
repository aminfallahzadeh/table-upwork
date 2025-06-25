// IMPORTS
import type { AppRoute } from "@/shared/types/routes";
import { lazy, createElement } from "react";
import { createSuspense } from "@/utils/suspenseCreator";
import AppLayout from "@/layouts/AppLayout";
import {
  BOOKINGS_URL,
  BASE_URL,
  GRAPH_URL,
  STATS_URL,
  GROUP_URL,
  NEWS_URL,
  SETTINGS_URL,
  PROFILE_URL,
} from "./urls";

const Bookings = lazy(() => import("@/screens/Bookings/Bookings"));
const Home = lazy(() => import("@/screens/Home/Home"));
const Graph = lazy(() => import("@/screens/Graph/Graph"));
const Stats = lazy(() => import("@/screens/Stats/Stats"));
const Group = lazy(() => import("@/screens/Group/Group"));
const News = lazy(() => import("@/screens/News/News"));
const Settings = lazy(() => import("@/screens/Settings/Settings"));
const Profile = lazy(() => import("@/screens/Profile/Profile"));

export const ROUTES: AppRoute[] = [
  {
    id: 1,
    element: createElement(AppLayout),
    path: BASE_URL,
    children: [
      {
        id: 100,
        element: createSuspense(Home),
        index: true,
        handle: { title: "Home" },
      },
      {
        id: 101,
        path: BOOKINGS_URL,
        element: createSuspense(Bookings),
        handle: { title: "All Bookings" },
      },
      {
        id: 102,
        path: GRAPH_URL,
        element: createSuspense(Graph),
        handle: { title: "Graph" },
      },
      {
        id: 103,
        path: STATS_URL,
        element: createSuspense(Stats),
        handle: { title: "Stats" },
      },
      {
        id: 104,
        path: GROUP_URL,
        element: createSuspense(Group),
        handle: { title: "Group" },
      },
      {
        id: 105,
        path: NEWS_URL,
        element: createSuspense(News),
        handle: { title: "News" },
      },
      {
        id: 106,
        path: SETTINGS_URL,
        element: createSuspense(Settings),
        handle: { title: "Settings" },
      },
      {
        id: 107,
        path: PROFILE_URL,
        element: createSuspense(Profile),
        handle: { title: "Profile" },
      },
    ],
  },
];
