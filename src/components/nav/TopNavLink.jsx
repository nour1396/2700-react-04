const TopNavLink = ({ label, url }) => {
    console.log('TopNavLink rendered')
    return (
        <li key={label} className="border">
            <a href={url}>{label}</a>
        </li>
    )
}

export default TopNavLink