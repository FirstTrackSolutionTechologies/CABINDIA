import { FC } from "react";
import { navItems } from "../Constants";
import { Link } from "react-router-dom";

interface IHeaderProps {
  width: string;
  active: string;
}

const Header : FC<IHeaderProps> = ({width, active}) => {
  const logo = "logo.png";
  return (
    <div className={`fixed w-${width} z-10`}>
      <div className="flex w-full h-16 bg-black items-center px-3 py-2 justify-center text-white">
        <div className="relative w-4/5">
          <div className="flex w-full items-center">
            <img className="w-10" src={logo} alt="" />
            <span className="text-md font-bold">CAB5155</span>
            <div className="absolute right-0">
              <div className="flex justify-between w-96">
                {navItems.map((item, index) => (
                  <Link key={index} to={item.link}><p className={(active===item.name)?"font-bold":""}>{`${item.name}`}</p></Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
