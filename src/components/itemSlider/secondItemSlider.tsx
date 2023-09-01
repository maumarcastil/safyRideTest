import { Character } from "@/types/characters";

interface ItemSliderProps {
  item: Character;
}

const SecondItemSlider = ({ item }: ItemSliderProps) => {
  return (
    <>
      <div className="flex">
        <div className="w-auto p-4 rounded-xl shadow-lg bg-white ">
          <div className="mb-2">
            <img
              className="rounded-xl shadow-lg"
              src={item.image}
              alt={item.name}
            />
          </div>

          {/* Content item slider */}
          <div className="flex flex-col gap-4">
            {/* name, status and species */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {item.name}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondItemSlider;
