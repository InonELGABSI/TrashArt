import logo from '../../assets/logo-small.png';
import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
    const navItems = [
        { text: "דברו איתנו", path: "/talk-with-us" },
        { text: "אודות", path: "/AboutPage" },
        { text: "קהילה", path: "/CommunityPage" },
        { text: "עשה זאת בעצמך", path: "/DIYPage" },
        { text: "כתבות", path: "/reports" }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-[#E4DFD3]/90 px-6 py-2">
                {/* Logo section - 20% width, centered */}
                <div className="w-1/5 flex justify-center items-center"> 
                    <Link to="/">
                        <img src={logo} alt="ArtTrash Logo" className="h-16" />
                    </Link>
                </div>
                
                {/* Navigation links section - 60% width, centered */}
                <div className="w-3/5 flex justify-center items-center">
                    <div className="flex space-x-8">
                        {navItems.map((item) => (
                            <NavLink 
                                key={item.text} 
                                to={item.path} 
                                className={({ isActive }) => 
                                    `text-gray-800 hover:text-gray-600 cursor-pointer transition-colors duration-200 px-4 py-2 rounded ${isActive ? 'bg-[#F7F5F0]' : ''}`
                                }
                            >
                                {item.text}
                            </NavLink>
                        ))}
                    </div>
                </div>
                
                {/* Profile section - 20% width, centered */}
                <div className="w-1/5 flex justify-center items-center">
                    <button className="px-4 py-2 rounded">
                        אזור אישי
                    </button>
                </div>
            </nav>
        </>
    );
}