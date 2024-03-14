import React from "react";
import { WithContext as ReactTags } from "react-tag-input";

// Specifies which characters should terminate tags input. An array of character codes.
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const InputTag = ({tags, setTags, text} : any) => {
 

  // Method to delete tag from Array
  const handleDelete = (i: number) => {
    setTags(tags.filter((tag: any, index: number) => index !== i));
  };

  // Method to Add tag into Array
  const handleAddition = (tag: any) => {
    console.log({tags})
    setTags([...tags, tag]);
  };
  return (
    <div style={{marginTop: 20}}>
    
    <label >{text}:</label>
    <div id="tags">
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="bottom"
        autocomplete
        allowDragDrop={false}
      />
    </div>
    </div>
  );
};

export default InputTag;