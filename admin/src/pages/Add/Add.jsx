import "./Add.css";
import { assets } from "../../assets/assets";
import {useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
const Add = () => {

  const url = "https://virtus-interior-products-backend.onrender.com/";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: ""
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]: value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image)
    formData.append("name", data.name)
    formData.append("description", data.description)
    const response = await axios.post(`${url}/api/project/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: ""
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
  }
 
  return (
    <div className="add">
      <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.uploadArea}
              alt="upload"
            />
          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-project-name">
          <p>Project Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type Here...."
            className="w-full border"
            required
          />
        </div>
        <div className="add-project-description">
          <p>Project Description</p>
          <textarea
            onChange={onChangeHandler} value={data.description}
            name="description"
            rows="6"
            placeholder="Write Content Here...."
            className="border w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="add-btn p-2 bg-black text-white border cursor-pointer rounded-lg max-w-[120px]"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
