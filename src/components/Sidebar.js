import '../css/Sidebar.css';

import logo from '../logo.svg';

function Sidebar() {
  function addNote() {

  }

  return (
    <nav className="sidebar">
      <img src={logo} className="sidebar-logo"/>
      <button onClick={addNote} class="sidebar-btn"><i class="ri-add-fill"></i></button>
    </nav>
  );
}

export default Sidebar;
