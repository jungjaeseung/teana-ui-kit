import GrayArea from "./temp_components/GrayArea";
import WhiteArea from "./temp_components/WhiteArea";
import SelectArea from "./temp_components/SelectArea";
import SearchArea from "./temp_components/SearchArea";
import Dropdown from "./temp_components/Dropdown";

export default function Home() {
  return (
    <div className=" grow overflow-hidden">
      <div className=" sticky top-0 flex justify-between items-center pt-4 pb-2 leading-[56px] bg-gray-100 z-10 flex-wrap gap-y-2 px-12">
        <SelectArea />
        <SearchArea />
      </div>
      <main className="flex flex-col px-12">
        <WhiteArea />
        <div className=" h-[20px]"></div>
        <GrayArea />
      </main>
      <div className=" mt-[20px] w-[200px] h-28 py-[40px] px-2 bg-background-default-subtle">
        <Dropdown label="lksadjfsdfjdsfjalfjdklasfjaslkdfj">
          <div className=" absolute left-[calc(100%+6px)] top-0 bg-red-300 rounded-lg w-[120px] h-[80px]" />
        </Dropdown>
      </div>
      <div className=" h-[1000px] bg-red-100"></div>
    </div>
  );
}
