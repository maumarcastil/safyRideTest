import { Character } from "@/types/characters";
import { ReactComponent as Ellipse } from "../../assets/ellipse.svg";

interface ItemSliderProps {
  item: Character;
}

const ItemSlider = ({ item }: ItemSliderProps) => {
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
              <div className="flex items-center gap-2">
                {item.status === "Alive" ? (
                  <Ellipse fill={"#55cc44"} className="h-3" />
                ) : (
                  <Ellipse fill={"#d63d2e"} className="h-3" />
                )}

                <span className="text-lg font-semibold tracking-tight">
                  {item.status} - {item.species}
                </span>
              </div>
            </div>

            {/* location */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-gray-400">
                last known location:
              </span>
              <span className="text-lg font-semibold tracking-tight">
                {item.location.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemSlider;
