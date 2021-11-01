import React from "react";
// component
import { Tag } from "../Tag";

const Tags = ({ tags, selectedTag, handleTags }) => {
  return (
    <div>
      Select Filter
      {tags.map((tag, key) => (
        <Tag
          key={`tag${key}`}
          selectedTag={selectedTag}
          handleTags={handleTags}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export { Tags };
