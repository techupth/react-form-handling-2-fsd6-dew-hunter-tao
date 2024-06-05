import { useState } from "react";

function ProductForm() {
const [nameText, setNameText] = useState("");
const [imgUrl, setImgUrl] = useState("");
const [priceNum, setPriceNum] = useState("");
const [descText, setDescText] = useState("");

const handleClick = (event) => {
  event.preventDefault();
  let setObject = {
    name: nameText,
    price: priceNum,
    image: imgUrl,
    description: descText
  };
  alert(JSON.stringify(setObject, null, 1));

  setNameText("");
  setImgUrl("");
  setPriceNum("");
  setDescText("");
};

  return (
    <form className="post-form" onSubmit={handleClick}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {setNameText(event.target.value)}}
            value = {nameText}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {setImgUrl(event.target.value)}}
            value = {imgUrl}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {setPriceNum(Number(event.target.value))}}
            value = {priceNum}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {setDescText(event.target.value)}}
            value = {descText}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
