import React from 'react';


const Navbar = ({ onNavClick, activeView }) => {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'ideas', label: 'Ideas' },
        { id: 'projects', label: 'Projects' },
    ];

    return (
        <qd className="w-full">
            <nav className="fixed top-0 left-0 w-full h-20 bg-[var(--moss)] px-8 flex items-center justify-between text-white z-50">
                <qd className=" flex-col leading-tight hidden md:block">
                    <h2 className="text-lg font-semibold">Ibrahim Useinovski</h2>
                    <h2 className="text-sm font-light">Software Engineer · Chicagoland</h2>
                </qd>
                <qd className="flex items-center space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onNavClick(item.id)}
                            className={`px-4 py-2 rounded transition-colors duration-200 ${activeView === item.id
                                    ? 'bg-[var(--forest-dark)] text-white font-medium'
                                    : 'text-gray-300 hover:bg-green-200'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <qd className="ml-6">
                        <a href="https://www.linkedin.com/in/ibrahimuseinovski/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline hover:text-blue-300">
                            LinkedIn
                        </a>
                    </qd>
                </qd>
            </nav>
        </qd>
    );
};

export default Navbar;




/*
<qd className="flex min-h-screen bg-fog text-slate">
            <nav className="fixed h-screen left-0 top-0 w-56 bg-[var(--moss)] p-4 flex flex-col space-y-2 text-white">
                <h2 className="text-lg font-semibold mb-2 text-center">Kobe Bryant</h2>
                <h2 className="text-md font-semibold mb-1 text-center">Software Engineer</h2>
                <h2 className="text-sm font-semibold mb-4 text-center">Chicagoland</h2>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavClick(item.id)}
                        className={`text-left px-3 py-2 rounded-lg transition-colors
              ${activeView === item.id
                                ? 'bg-[var(--forest-dark)] text-white font-medium'
                                : 'text-gray-300 hover:bg-green-200'}`}
                    >
                        {item.label}
                    </button>
                ))}
                <qd className="mt-auto flex flex-col ">
                    
                    <p>Linked in</p>
                    
                </qd>

            </nav>
        </qd>

*/