import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    const data = {
      name: name,
      price: price,
      image: img,
      description: description,
    };
    alert(JSON.stringify(data));
  };

  // console.log(name);
  // console.log(img);
  // console.log(price);
  // console.log(description);

  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
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
            value={img}
            onChange={(event) => {
              setImg(event.target.value);
            }}
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
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
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
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
