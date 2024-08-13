import { RxDashboard } from "react-icons/rx";
import GrayArea from "./temp_components/GrayArea";
import WhiteArea from "./temp_components/WhiteArea";
import SelectArea from "./temp_components/SelectArea";
import SearchArea from "./temp_components/SearchArea";

export default function Home() {
  return (
    <>
      <div className=" sticky top-0 flex justify-between items-center pt-4 pb-2 leading-[56px] bg-gray-100 z-10 flex-wrap gap-y-2 px-12">
        <SelectArea />
        <SearchArea />
      </div>

      <main className="flex flex-col px-12">
        <WhiteArea />
        <div className=" h-[20px]"></div>
        <GrayArea />
      </main>
    </>
  );
}
