import "./Add.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loader when the form is being submitted

    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("name", data.name);
    formData.append("description", data.description);

    // Debugging: Log form data
    console.log("Form data before sending:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(`${url}/api/project/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error uploading project:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
      toast.error("Error uploading project");
    } finally {
      setLoading(false); // Hide loader after the submission is complete
    }
  };

  return (
    <div className="add">
      {loading ? (
        <p>Loading...</p> // Display a loader while form is being submitted
      ) : (
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
              accept="image/*" // Restrict to image files only
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
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="6"
              placeholder="Write Content Here...."
              className="border w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="add-btn p-2 bg-black text-white border cursor-pointer rounded-lg max-w-[120px]"
          >
            ADD
          </button>
        </form>
      )}
    </div>
  );
};

export default Add;
