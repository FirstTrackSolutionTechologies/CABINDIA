import { FC, useState } from "react";
import { navItems } from "../Constants";
import { Link } from "react-router-dom";

interface IHeaderProps {
  width: string;
  active: string;
  isLoggedIn: Boolean;
}

interface INavItemProps {
  index: number;
  item : {
    link : string;
    name : string;
    dropdown : Boolean;
    dropdownOptions : object[];
  };
  active : string;
}

const NavItem : FC<INavItemProps> = ({index, item, active}) => {
  const [isDropdown, setIsDropdown] = useState<Boolean>(false)
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);  
  }
  return (
    <>
      <div className="relative" onClick={item.dropdown?(toggleDropdown):(()=>{})}>
      <Link key={index} to={(item.dropdown)?("#"):item.link}><p className={(active===item.name)?"font-bold":""}>{`${item.name}${item.dropdown?(isDropdown?" ▲":" ▼"):""}`}</p></Link>
      {isDropdown &&
        (<>
          <div className="absolute top-8 w-48 p-4 bg-gray-800 text-yellow">
            {item.dropdownOptions.map((item: any, index) => (
              <div className="py-2">
              <Link key={index} to={item.link}><p className={(active===item.name)?"font-bold":""}>{`${item.name}`}</p></Link>
              </div>
            ))}
          </div>
        </>)
      }
      </div>
      
    </>
  )
}

const Header : FC<IHeaderProps> = ({width, active, isLoggedIn }) => {
  const [isProfileMenu, setIsProfileMenu] = useState(false)
  const toggleProfile = () => {
    setIsProfileMenu(!isProfileMenu)
  }
  const logo = "logo.png";
  return (
    <div className={`fixed w-${width} z-10 top-0`}>
      <div className="flex w-full h-16 bg-gray-900 items-center px-3 py-2 justify-center text-white">
        <div className="relative w-3/5">
          <div className="flex w-full items-center">
            <img className="w-10" src={logo} alt="" />
            &nbsp;
            <span className="text-md font-bold">CAB5155</span>
            <div className="absolute right-0">
              <div className="flex justify-between w-96">
                {navItems.map((item : any, index) => (
                  <NavItem item={item} index={index} active={active} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {
          isLoggedIn && (
            <div className="w-[150px] h-16 flex justify-center items-center ml-12" onClick={toggleProfile}>
            <div className="h-16 flex items-center justify-center mr-3">
              UserName
            </div>
            <div className="h-12 w-12 flex items-center justify-center rounded-full overflow-hidden bg-slate-200">
              <img className="" src="logo.png" alt="" />
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Header;
