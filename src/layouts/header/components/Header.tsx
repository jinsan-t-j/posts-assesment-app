import type { FC } from 'react'
import { Navbar, NavbarBrand } from 'flowbite-react'

/**
 * The header components.
 *
 * @returns The JSX.
 */
export const Header: FC = () => {
    return (
        <Navbar fluid rounded>
            <NavbarBrand> The Post App </NavbarBrand>
        </Navbar>
    )
}
