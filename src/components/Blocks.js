import React from "react";
import BlockInfo from "../components/BlockInfo";

function Blocks(props) {
  return (
    <div
      className="d-inline-block g-block "
      onClick={(e) => props.click(props.item)}
    >
      <img
        className=" g-block-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <BlockInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          imgSrc={props.item.imgSrc}
          subMatter={props.item.subMatter}
        />
      )}
    </div>
  );
}

export default Blocks;
