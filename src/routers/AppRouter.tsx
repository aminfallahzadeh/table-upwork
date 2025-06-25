// IMPORTS
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import type { FC } from "react";
import { ROUTES } from "@/constants/routes";
import { Error } from "@/pages/ErrorPage";
import type { AppRoute } from "@/shared/types/routes";

const renderRoutes = (routes: AppRoute[]) =>
  routes.map((route) => {
    if (!route.path && route.children) {
      return (
        <Route key={route.id} element={route.element} handle={route.handle}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return (
      <Route
        key={route.id}
        path={route.path}
        element={route.element}
        handle={route.handle}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {renderRoutes(ROUTES)}
      <Route path="*" element={<Error />} />
    </>
  )
);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
