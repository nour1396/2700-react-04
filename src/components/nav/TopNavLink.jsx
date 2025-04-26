import {Link} from 'react-router'
const TopNavLink = ({ label, url }) => {
    console.log('TopNavLink rendered')
    return (
        <li key={label} className="border">
            <Link to={url}>{label}</Link>
        </li>
    )
}

export default TopNavLink