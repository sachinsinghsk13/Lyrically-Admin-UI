import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./Sidebar";

const menuToggle = (ref: React.RefObject<HTMLLIElement>) => {
    ref.current?.classList.toggle('showMenu');
};

const SidebarMenu = (props: any) => {
    console.log(props);
    const ref = React.createRef<HTMLLIElement>();
    const menu: MenuItem = props.menu;
    return (
        <li ref={ref}>
            {
                menu.hasSubmenu && <>
                    <div className="iocn-link">
                        <Link to={menu.path}>
                            <i className={menu.icon}></i>
                            <span className="link_name">{menu.title}</span>
                        </Link>
                        <i className='bx bxs-chevron-down arrow' onClick={() => menuToggle(ref)}></i>
                    </div>
                    <ul className="sub-menu">
                        <li className="link_name" key={1} >{menu.title}</li>
                        {menu.submenu && menu.submenu.map(submenu => <li key={submenu._id} ><Link to={submenu.path}>{submenu.title}</Link></li>)}
                    </ul>
                </>
            }
            {
                !menu.hasSubmenu && <>
                    <Link to={menu.path}>
                        <i className={menu.icon} ></i>
                        <span className="link_name">{menu.title}</span>
                    </Link>
                    <ul className="sub-menu blank">
                        <li key={1}><Link className="link_name" to={menu.path}>{menu.title}</Link></li>
                    </ul>
                </>
            }
        </li>
    );

}

export default SidebarMenu;