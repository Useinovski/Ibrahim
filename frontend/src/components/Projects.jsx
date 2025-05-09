const Projects = () => {
    return (
        <div className="p-8 mb-4 bg-[color:var(--mist-white)] text-[var(--forest-green)]" style={{
            fontFamily: '"Orbitron", sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: 700,
            fontStyle: 'normal'
        }}>

            <h2 className="text-2xl font-bold mb-6">My Projects</h2>
            <div className="bg-white border border-gray-200 p-4 mb-6 rounded-xs shadow hover:bg-[color:var(--fog-gray)] transition">
                <h3 className="font-semibold text-lg mb-1 text-[var(--moss-green)]">Mozart’s Traffic School</h3>
                <p className="text-sm italic mb-2 text-[var(--forest-dark)]">Contracted Project &middot; Feb 2024 - Present</p>
                <p className="text-sm text-[var(--forest-green)]">
                    Contracted to convert a WordPress website into a custom web application. Used React with Tailwind CSS to design a new frontend UI. Developed the backend using Node.js and Express.js to manage user-based changes, middleware, and API calls. Integrated a protected admin dashboard for updating pricing, managing clients, and customizing site features more effectively.
                </p>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 md-flex gap-6">
                {/* E-Commerce Site */}

                {/* E-Commerce Site */}
                <div className="bg-white border border-gray-200 p-4 rounded-xs shadow hover:bg-[color:var(--fog-gray)] transition">
                    <h3 className="font-semibold text-lg mb-1 text-[var(--moss-green)]">E-Commerce Site</h3>
                    <p className="text-sm italic mb-2 text-[var(--forest-dark)]">Contracted Project &middot; Nov 2024 - Jan 2025</p>
                    <p className="text-sm text-[var(--forest-green)]">
                        Built an e-commerce website using Node.js, Express.js, React, and MSSQL. Designed the frontend GUI with React and Tailwind CSS. Developed a custom CMS backend system with Node.js, following best coding practices from pre-production to deployment.

                    </p>
                </div>

                {/* Blog */}
                <div className="bg-white border border-gray-200 p-4 rounded-xs shadow hover:bg-[color:var(--fog-gray)] transition">
                    <h3 className="font-semibold text-lg mb-1 text-[var(--moss-green)]">Blog</h3>
                    <p className="text-sm italic mb-2 text-[var(--forest-dark)]">Contracted Project &middot; Aug 2024 - Nov 2024</p>
                    <p className="text-sm text-[var(--forest-green)]">
                        Developed a custom blog tool using the MERN stack, incorporating formal Software Development Life Cycle (SDLC) principles. Built the frontend, middleware, backend, and APIs. Integrated AWS S3 to enhance security and accessibility using S3 buckets. Ensured secure data management through localized data encryption.

                    </p>
                </div>

                {/* Banking Finance WebApp */}
                <div className="bg-white border border-gray-200 p-4 rounded-xs shadow hover:bg-[color:var(--fog-gray)] transition">
                    <h3 className="font-semibold text-lg mb-1 text-[var(--moss-green)]">Banking Finance WebApp</h3>
                    <p className="text-sm italic mb-2 text-[var(--forest-dark)]">Contracted Project &middot; Jan 2024 - Jul 2024</p>
                    <p className="text-sm text-[var(--forest-green)]">
                        Built a full-stack finance tracker using the MERN stack while incorporating formal SDLC methodologies within the team. Focused on backend functionality, implementing a UI for both user and admin control. Developed CRUD routines following REST API conventions. Created automated backend scripts for simulated data entry and ensured best coding practices throughout development.
                    </p>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-6 mt-4 ">
                    <div className="h-16 items-center justify-center rounded-xs bg-[var(--moss)] transition-all duration-600 hover:h-40 overflow-hidden hidden md:flex"><qr className="text-[var(--forest-dark)] font-bold ">Content<qd> Coming Soon</qd></qr></div>
                    <div className="h-16 items-center justify-center rounded-xs bg-[var(--forest-green)] transition-all duration-600 hover:h-40 hidden md:flex"><qr className="text-[var(--mist-white)] font-bold">Content<qd> Coming Soon</qd></qr></div>
                    <div className="h-16 items-center justify-center rounded-xs bg-[var(--forest-dark)] transition-all duration-600 hover:h-40 hidden md:flex"><qr className="text-[var(--cloud-white)] font-bold">Content<qd> Coming Soon</qd></qr></div>
                </div>
            </div>
        </div>

    );
};

export default Projects;