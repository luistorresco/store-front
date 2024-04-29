import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const useWindowDimensions = (minItemWidth) => {
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );
  const [numColumns, setNumColumns] = useState(
    Math.max(2, Math.floor(windowWidth / minItemWidth))
  );

  useEffect(() => {
    const updateLayout = ({ window }) => {
      setWindowWidth(window.width);
      setNumColumns(Math.max(2, Math.floor(window.width / minItemWidth)));
    };

    const subscription = Dimensions.addEventListener("change", updateLayout);
    return () => {
      if (subscription.remove) {
        subscription.remove();
      } else {
        Dimensions.removeEventListener("change", updateLayout);
      }
    };
  }, []);

  return { windowWidth, numColumns };
};
