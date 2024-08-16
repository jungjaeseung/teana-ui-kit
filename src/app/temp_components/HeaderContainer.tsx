"use client";
import Header from "@/stories/templates/Header";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";

type HeaderContainerProps = {};

const tempItemData = {
  Icon: <FaFileAlt className=" text-emerald-800" />,
  title: "데이터셋 이름",
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  bgColor: "bg-emerald-100",
};

const HeaderContainer = ({}: HeaderContainerProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [itemData, setItemData] = useState<
    | {
        Icon: React.JSX.Element;
        title: string;
        desc: string;
        bgColor: string;
      }
    | undefined
  >(undefined);
  const [descIconInfo, setDescIconInfo] = useState<
    React.JSX.Element | undefined
  >(undefined);
  const [tabData, setTabData] = useState<
    {
      href: string;
      label: string;
      selected: boolean;
    }[]
  >([
    {
      href: "",
      label: "",
      selected: false,
    },
  ]);

  useEffect(() => {
    const pathnameSplittedArr = pathname.split("/");
    const lastPathname = pathnameSplittedArr[pathnameSplittedArr.length - 1];
    if (["/manual", "/settings/accounts"].includes(pathname)) {
      console.log("clear datas to undefined");
      setItemData(undefined);
      setTabData([]);
      setDescIconInfo(undefined);
      return undefined;
    }
    if (pathname.includes("/workspaces")) {
      if (pathname === "/workspaces") {
        console.log("clear datas to undefined");
        setItemData(undefined);
        setTabData([]);
        setDescIconInfo(undefined);
      } else if (pathname.includes("/workspaces/monitoring/")) {
        console.log("here 1");
        setItemData(undefined);
        setTabData([
          {
            href: "/workspaces/monitoring/dashboard",
            label: "대시보드",
            selected: lastPathname === "dashboard",
          },
          {
            href: "/workspaces/monitoring/logs",
            label: "로그",
            selected:
              lastPathname === "logs" ||
              pathnameSplittedArr[pathnameSplittedArr.length - 2] === "log",
          },
        ]);
        setDescIconInfo(undefined);
      }
    } else {
      if (pathname.includes("/monitoring/")) {
        console.log("here 2");
        setItemData(undefined);
        setTabData([
          {
            href: "/workspace/tempWorkspaceId/monitoring/dashboard",
            label: "대시보드",
            selected: lastPathname === "dashboard",
          },
          {
            href: "/workspace/tempWorkspaceId/monitoring/logs",
            label: "로그",
            selected:
              lastPathname === "logs" ||
              pathnameSplittedArr[pathnameSplittedArr.length - 2] === "log",
          },
        ]);
        setDescIconInfo(undefined);
      } else if (lastPathname === "datasets") {
        console.log("here 3");

        setItemData(undefined);
        setTabData([
          {
            href: "/workspace/tempWorkspaceId/datasets?category=all",
            label: "All",
            selected: category === "all",
          },
          {
            href: "/workspace/tempWorkspaceId/datasets?category=instruction",
            label: "Instruction",
            selected: category === "instruction",
          },
          {
            href: "/workspace/tempWorkspaceId/datasets?category=rag",
            label: "RAG",
            selected: category === "rag",
          },
        ]);
        setDescIconInfo(undefined);
      } else if (pathname.includes("/dataset/")) {
        if (pathname.includes("/manage/") && lastPathname !== "manage") {
          console.log("here 5");
          setItemData(undefined);
          setDescIconInfo(undefined);
          setTabData([]);
          return undefined;
        }

        let isRAG = false;
        if (pathname.includes("/rag/")) isRAG = true;
        console.log("here 4");
        setItemData(tempItemData);
        setDescIconInfo(undefined);
        setTabData(
          [
            {
              href: `/workspace/tempWorkspaceId/dataset/${isRAG ? "rag" : "instruction"}/datasetId/manage`,
              label: "데이터셋 관리",
              selected: lastPathname === "manage",
            },
            isRAG
              ? {
                  href: `/workspace/tempWorkspaceId/dataset/${isRAG ? "rag" : "instruction"}/datasetId/api-docs`,
                  label: "API",
                  selected: lastPathname === "api-docs",
                }
              : undefined,
            isRAG
              ? {
                  href: `/workspace/tempWorkspaceId/dataset/${isRAG ? "rag" : "instruction"}/datasetId/settings`,
                  label: "설정",
                  selected: lastPathname === "settings",
                }
              : undefined,
          ].filter((i) => i) as {
            href: string;
            label: string;
            selected: boolean;
          }[],
        );
      } else if (
        lastPathname === "models" ||
        lastPathname === "apps" ||
        lastPathname === "manage-auth"
      ) {
        console.log("here 6 [no_tabs]");
        setItemData(undefined);
        setTabData([]);
        setDescIconInfo(undefined);
      } else if (pathname.includes("/model/")) {
        setTabData([
          {
            href: `/workspace/tempWorkspaceId/model/modelId/orchestrate`,
            label: "오케스트레이트",
            selected: lastPathname === "orchestrate",
          },
          {
            href: `/workspace/tempWorkspaceId/model/modelId/logs`,
            label: "로그",
            selected: lastPathname === "logs",
          },
          {
            href: `/workspace/tempWorkspaceId/model/modelId/monitoring`,
            label: "모니터링",
            selected: lastPathname === "monitoring",
          },
        ]);
        if (pathname.includes("orchestrate")) {
          console.log("here 7");
          setItemData(tempItemData);
          setDescIconInfo(
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>,
          );
          return undefined;
        }
        if (pathname.includes("/logs/playgrounds")) {
          console.log("here 9");
          setItemData(tempItemData);
          setDescIconInfo(undefined);
          return undefined;
        }
        console.log("here 8");

        setItemData(undefined);
        setDescIconInfo(undefined);
      } else if (pathname.includes("/app/")) {
        setTabData([
          {
            href: `/workspace/tempWorkspaceId/app/appId/orchestrate`,
            label: "오케스트레이트",
            selected: lastPathname === "orchestrate",
          },
          {
            href: `/workspace/tempWorkspaceId/app/appId/api-docs`,
            label: "API",
            selected: lastPathname === "api-docs",
          },
          {
            href: `/workspace/tempWorkspaceId/app/appId/logs`,
            label: "로그",
            selected: lastPathname === "logs",
          },
          {
            href: `/workspace/tempWorkspaceId/app/appId/monitoring`,
            label: "모니터링",
            selected: lastPathname === "monitoring",
          },
        ]);
        if (pathname.includes("orchestrate")) {
          console.log("here 10");
          setItemData(tempItemData);
          setDescIconInfo(
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>,
          );
          return undefined;
        }
        console.log("here 11");

        setItemData(undefined);
        setDescIconInfo(undefined);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (category) {
      let tempSet = [
        {
          href: "/workspace/tempWorkspaceId/datasets?category=all",
          label: "All",
          selected: true,
        },
        {
          href: "/workspace/tempWorkspaceId/datasets?category=instruction",
          label: "Instruction",
          selected: false,
        },
        {
          href: "/workspace/tempWorkspaceId/datasets?category=rag",
          label: "RAG",
          selected: false,
        },
      ];
      if (category === "all") {
        tempSet[0].selected = true;
        tempSet[1].selected = false;
        tempSet[2].selected = false;
        setTabData(tempSet);
      } else if (category === "instruction") {
        tempSet[0].selected = false;
        tempSet[1].selected = true;
        tempSet[2].selected = false;
        setTabData(tempSet);
      } else {
        tempSet[0].selected = false;
        tempSet[1].selected = false;
        tempSet[2].selected = true;
        setTabData(tempSet);
      }
    }
  }, [category]);
  return (
    <Header ItemData={itemData} descIconInfo={descIconInfo} tabData={tabData} />
  );
};

export default HeaderContainer;
