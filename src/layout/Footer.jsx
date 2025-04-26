
export default function Footer () {
    return (
        <footer className="bg-sky-900 text-white p-4 fixed bottom-0 w-full">
        <div className="container mx-auto text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <p>Follow us on social media!</p>
            <ul className="flex justify-center space-x-4">
            <li><a href="#" className="text-white">Facebook</a></li>
            <li><a href="#" className="text-white">Twitter</a></li>
            <li><a href="#" className="text-white">Instagram</a></li>
            </ul>
        </div>
        </footer>
    )
}