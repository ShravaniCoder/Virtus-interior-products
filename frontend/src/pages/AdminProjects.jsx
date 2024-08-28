import  { useEffect, useState } from "react";
import AdminLayout from "./Admin";


const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const newProject = await response.json();
    setProjects([...projects, newProject]);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    setProjects(projects.filter((project) => project._id !== id));
  };

  return (
    <AdminLayout>
      <div className="admin-projects">
        <h1>Manage Projects</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <button type="submit">Add Project</button>
        </form>

        <div className="project-list">
          {projects.map((project) => (
            <div key={project._id} className="project-item">
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button onClick={() => handleDelete(project._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProjects;
