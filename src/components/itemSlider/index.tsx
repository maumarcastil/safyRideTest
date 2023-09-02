import { Character } from "@/types/characters";
import { ReactComponent as Ellipse } from "../../assets/ellipse.svg";
import { useAppSelector } from "@/hooks/redux";

interface ItemSliderProps {
  item: Character;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const ItemSlider = ({ item, isLoading, setIsLoading }: ItemSliderProps) => {
  const { loading } = useAppSelector((state) => state.characters);

  return (
    <>
      <div className="flex">
        <div className="w-auto p-4 rounded-xl shadow-lg bg-white ">
          <div className="relative mb-2">
            <img
              className="rounded-xl shadow-lg"
              src={item.image}
              alt={item.name}
              onLoad={() => setIsLoading(false)}
            />

            {/* Skeleton */}
            {(loading || isLoading) && (
              <>
                <div className="bg-white rounded-lg absolute w-full h-full top-0 z-0" />
                <div className="animate-pulse bg-gray-200 rounded-lg absolute w-full h-full top-0 z-10" />
              </>
            )}
          </div>

          {loading || isLoading ? (
            <>
              {/* skeleton */}
              <div className="flex flex-col gap-4 mt-4">
                {/* name, status and species */}
                <div className="flex flex-col gap-2">
                  <div className="animate-pulse h-5 w-3/4 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-2">
                    <div className="animate-pulse h-3 w-3  bg-gray-300 rounded-full" />
                    <div className="animate-pulse h-4 w-1/2 bg-gray-300 rounded-full" />
                  </div>
                </div>

                {/* location */}
                <div className="flex flex-col gap-2">
                  <div className="animate-pulse h-4 w-2/3 bg-gray-300 rounded-full" />
                  <div className="animate-pulse h-4 w-4/5 bg-gray-300 rounded-full" />
                </div>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemSlider;
