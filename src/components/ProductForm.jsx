import {useState} from 'react'

function ProductForm() {
  const [name,getName] = useState("")
  const [image,getImage] = useState("")
  const [price,getPrice] = useState("")
  const [description,getDescription] = useState("")
 
  const handleClick =() =>{
    let showObject={
      name: name,
      image:image,
      price:price,
      description:description
    }
      alert(JSON.stringify(showObject,null,5))  
  }
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
            onChange={(e) => {
              getName(e.target.value)
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
            onChange={(e) => {
              getImage(e.target.value)
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
            onChange={(e) => {
              getPrice(e.target.value)
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
            onChange={(e) => {
              getDescription(e.target.value)
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button onClick={handleClick} type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
