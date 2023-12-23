import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <h1>Links</h1>
      <ul>
        <li><Link to="/login/">Login</Link></li>
        <li><Link to="/dashboard/">Dashboard</Link></li>
        <li><Link to="/manage-account/">Manage Accounts</Link></li>
        <li><Link to="/manage-area/">Manage Area</Link></li>
        <li><Link to="/patient-data/">Patient Data</Link></li>
        <li><Link to="/predictive-analytics/">Predictive Analytics</Link></li>
      </ul>
        <Outlet />
    </> )
}

export default MainLayout;