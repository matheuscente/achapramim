import type { Routes } from "@/app/router/routeNames";

export type RouteName = typeof Routes[keyof typeof Routes]["name"]
