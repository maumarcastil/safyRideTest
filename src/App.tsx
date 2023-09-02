import React, { Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchCharacters } from "./redux/slices/characters/charactersActions";

const LazySlider = React.lazy(() => import("@/components/slider"));

function App() {
  const { currentCharacter } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (!currentCharacter) {
        await dispatch(fetchCharacters(1));
      }
    })();
  }, [dispatch]);

  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="max-w-[1440px] mx-2 my-4">
          <Suspense fallback={<div>Loading...</div>}>
            <LazySlider />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
