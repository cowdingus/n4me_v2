import '../css/Sidebar.css';

import logo from '../logo.svg';

function Sidebar({addHandler}) {
  return (
    <nav className="sidebar">
      <img src={logo} className="sidebar-logo" alt=""/>
      <button onClick={addHandler} className="sidebar-btn"><i className="ri-add-fill"></i></button>
    </nav>
  );
}

export default Sidebar;
