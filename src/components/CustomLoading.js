/* eslint-disable react/prop-types */
import React, { memo } from "react";
export default memo(function CustomLoading(props) {
  return props.isLoading ? (
    <div
      className=" w-12 h-12 rounded-full animate-spin
                        border-y-2 border-solid border-blue-500 border-t-transparent"
    />
  ) : (
    ""
  );
});
