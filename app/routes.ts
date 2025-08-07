import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projectPage/:id", "routes/projectPage.tsx"),
] satisfies RouteConfig;
