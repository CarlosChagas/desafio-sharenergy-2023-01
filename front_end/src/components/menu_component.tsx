import { Nav, NavItem, NavLink } from "reactstrap"

const Menu = () => {
    return (
        <div className="menu-nav">
            <Nav justified >
                <NavItem>
                    <NavLink active href="#">
                        First Page
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Second Page
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Third Page
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}
export default Menu