import { navLinks } from '../lib/data';
import TopNavLink from '../components/nav/TopNavLink';

export default function TopNavbar() {
    console.log('TopNavbar Rendered')

    return (
        <nav>
            <ul className="flex gap-2">

                {navLinks.map(TopNavLink)}

            </ul>
        </nav>
    )
}

 