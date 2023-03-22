import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={244}
    viewBox="0 0 240 244"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="240" height="168" />
    <rect x="0" y="186" rx="0" ry="0" width="139" height="28" />
    <rect x="0" y="226" rx="0" ry="0" width="84" height="31" />
  </ContentLoader>
);

export default Skeleton;
