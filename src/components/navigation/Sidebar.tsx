import { useEffect, useState } from 'react';
import '../../styles/sidebar.css'
import sidebarData from '../../data/sidebar';
import SidebarMenu from './SidebarMenu';
import axios from 'axios';
import Constants from '../../utils/Constants';
import { useSelector } from 'react-redux';
import LogoutConfirmationModal from '../auth-components/LogoutConfirmationModal';
function toggleState(current: string): string {
  return current === 'close' ? 'open' : 'close';
}

const Sidebar = (props: any) => {
  const [sidebarState, setSidebarState] = useState('close');
  const [logoutModalShow, setLogoutModalShow] = useState(false);
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const currentUser = useSelector((state: any) => state.authentication.user);
  useEffect(() => {
    const fetchMenus = async () => {
      let menus = await axios.get(`${Constants.BASE_URL}/admin/webmenus`);
      if (menus.status === 200) {
        setMenus(menus.data);
      }
    };
    fetchMenus();
  }, []);

  return (
    <div className={`sidebar ${sidebarState === 'close' ? 'close' : ''}`}>
      <div className="logo-details">
        <i className='bx bx-menu' onClick={() => { setSidebarState(toggleState(sidebarState)); props.onSidebarToggle(toggleState(sidebarState)) }}></i>
        <span className="logo_name">{sidebarData.title}</span>
      </div>
      <ul className="nav-links">
        {menus.map(menu => <SidebarMenu menu={menu} key={menu._id} />)}
        <li>
          <div className="profile-details">
            <div className="profile-top">
              <div className="profile-content">
                <img src={`${Constants.SERVER_URL}/avtars/${currentUser.avtarImg}`} alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">{currentUser.name}</div>
                <div className="job">{currentUser.email}</div>
              </div>
            </div>
            <div className="logout-div w-100 p-2">
              <button className="btn btn-danger w-100" title="Logout from your session" onClick={() => setLogoutModalShow(true)}>
                <i className='bx bx-log-out' ></i>
                <span>Logout</span>
              </button>
            </div>

          </div>
        </li>
      </ul>
      <LogoutConfirmationModal show={logoutModalShow} onHide={() => setLogoutModalShow(false)}/>
    </div>
  );
};

export default Sidebar;

export interface SubmenuItem {
  _id?: number;
  title: string;
  icon?: string;
  order: number;
  path: string;
}

export interface MenuItem {
  _id?: number;
  title: string;
  path: string,
  order: number;
  icon?: string,
  hasSubmenu: boolean;
  submenu: SubmenuItem[]
}