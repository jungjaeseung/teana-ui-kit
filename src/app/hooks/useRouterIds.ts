import { useEffect, useState } from "react";

export default function useRouterIds(pathname: string) {
  const staticRouteNameArr = [
    "workspace",
    "monitoring",
    "logs",
    "dashboard",
    "datasets",
    "dataset",
    "rag",
    "upload",
    "instruction",
    "manage",
    "models",
    "model",
    "apps",
    "app",
    "manage-auth",
    "settings",
    "manual",
    "accounts",
    "playgrounds",
    "orchestrate",
    "api-docs",
    "log",
  ];
  const [ids, setIds] = useState<string[]>([]);
  const getIsId = (name: string) => {
    if (name === "" || staticRouteNameArr.includes(name)) return false;
    return true;
  };
  useEffect(() => {
    setIds(pathname.split("/").filter((name) => getIsId(name)));
  }, [pathname]);
  return ids;
}
