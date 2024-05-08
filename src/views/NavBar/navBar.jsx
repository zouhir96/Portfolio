import { Links } from "./NavComponents";
const NavBar = () => {
    return (
        <nav className="flex justify-between p-3 ">
            <img src="logo.png" alt="logo" className="h-8" />
            <Links></Links>
        </nav>
    );
}

export default NavBar;
