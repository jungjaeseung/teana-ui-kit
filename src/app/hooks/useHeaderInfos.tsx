import { FaFileAlt } from "react-icons/fa";
import { ReadonlyURLSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export type ItemDataType =
  | {
      Icon: React.JSX.Element;
      title: string;
      desc: string;
      bgColor: string;
    }
  | undefined;
export type DescIconInfoType = React.JSX.Element | undefined;
export type TabDataType = {
  href: string;
  label: string;
  selected: boolean;
}[];

const tempItemData = {
  Icon: <FaFileAlt className=" text-emerald-800" />,
  title: "데이터셋 이름",
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  bgColor: "bg-emerald-100",
};

export default function useHeaderInfos(
  pathname: string,
  ids: string[],
  searchParams: ReadonlyURLSearchParams,
) {
  const category = searchParams.get("category");

  const [itemData, setItemData] = useState<ItemDataType>(undefined);
  const [descIconInfo, setDescIconInfo] = useState<DescIconInfoType>(undefined);
  const [tabData, setTabData] = useState<TabDataType>([]);

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
            href: `/workspace/${ids[0]}/monitoring/dashboard`,
            label: "대시보드",
            selected: lastPathname === "dashboard",
          },
          {
            href: `/workspace/${ids[0]}/monitoring/logs`,
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
            href: `/workspace/${ids[0]}/datasets?category=all`,
            label: "All",
            selected: category === "all",
          },
          {
            href: `/workspace/${ids[0]}/datasets?category=instruction`,
            label: "Instruction",
            selected: category === "instruction",
          },
          {
            href: `/workspace/${ids[0]}/datasets?category=rag`,
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
              href: `/workspace/${ids[0]}/dataset/${isRAG ? "rag" : "instruction"}/${ids[1]}/manage`,
              label: "데이터셋 관리",
              selected: lastPathname === "manage",
            },
            isRAG
              ? {
                  href: `/workspace/${ids[0]}/dataset/${isRAG ? "rag" : "instruction"}/${ids[1]}/api-docs`,
                  label: "API",
                  selected: lastPathname === "api-docs",
                }
              : undefined,
            isRAG
              ? {
                  href: `/workspace/${ids[0]}/dataset/${isRAG ? "rag" : "instruction"}/${ids[1]}/settings`,
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
            href: `/workspace/${ids[0]}/model/${ids[1]}/orchestrate`,
            label: "오케스트레이트",
            selected: lastPathname === "orchestrate",
          },
          {
            href: `/workspace/${ids[0]}/model/${ids[1]}/logs`,
            label: "로그",
            selected: lastPathname === "logs",
          },
          {
            href: `/workspace/${ids[0]}/model/${ids[1]}/monitoring`,
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
            href: `/workspace/${ids[0]}/app/${ids[1]}/orchestrate`,
            label: "오케스트레이트",
            selected: lastPathname === "orchestrate",
          },
          {
            href: `/workspace/${ids[0]}/app/${ids[1]}/api-docs`,
            label: "API",
            selected: lastPathname === "api-docs",
          },
          {
            href: `/workspace/${ids[0]}/app/${ids[1]}/logs`,
            label: "로그",
            selected: lastPathname === "logs",
          },
          {
            href: `/workspace/${ids[0]}/app/${ids[1]}/monitoring`,
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
  }, [pathname, ids]);

  useEffect(() => {
    if (category) {
      let tempSet = [
        {
          href: `/workspace/${ids[0]}/datasets?category=all`,
          label: "All",
          selected: true,
        },
        {
          href: `/workspace/${ids[0]}/datasets?category=instruction`,
          label: "Instruction",
          selected: false,
        },
        {
          href: `/workspace/${ids[0]}/datasets?category=rag`,
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
  }, [category, ids]);
  return [itemData, descIconInfo, tabData];
}
