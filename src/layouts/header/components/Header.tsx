import type { FC } from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

/**
 * The header components.
 *
 * @returns The JSX.
 */
export const Header: FC = () => {
    return (
        <Navbar>
            <Navbar.Brand as={Link} href='/' className='m-auto'>
                <span className='self-center whitespace-nowrap text-xl underline tracking-widest font-semibold dark:text-white'>
                    The Post App
                </span>
            </Navbar.Brand>
        </Navbar>
    )
}
