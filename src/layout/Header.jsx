const Header = () => {
    console.log('Header rendered')
    
    return (
        <header className="h-3/12 bg-amber-600 flex items-center justify-center content-center">
            <h1 className="font-black text-3xl uppercase">Company Name</h1>
        </header>
    )
}

export default Header;