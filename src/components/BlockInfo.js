import React from "react";
import { useSpring, animated } from "react-spring";

function BlockInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-block-info" style={style}>
      <p className="g-block-title">{props.title}</p>
      <p className="g-block-sub-title">{props.subTitle}</p>
      <p className="g-block-sub-matter">{props.subMatter}</p>
    </animated.div>
  );
}

export default BlockInfo;
