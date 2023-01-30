import React, { memo } from "react";
import { RotatingLines } from "react-loader-spinner";

function LoadingSong() {
  return (
    <div>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="28"
        visible={true}
      />
    </div>
  );
}

export default memo(LoadingSong);
