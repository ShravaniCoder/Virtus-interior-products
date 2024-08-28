
const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <nav className="admin-nav">
        <ul>
          <li>
            <a href="/admin/projects">Projects</a>
          </li>
          <li>
            <a href="/admin/users">Users</a>
          </li>
          <li>
            <a href="/admin/settings">Settings</a>
          </li>
        </ul>
      </nav>
      <main className="admin-content">{children}</main>
    </div>
  );
};

export default AdminLayout;
