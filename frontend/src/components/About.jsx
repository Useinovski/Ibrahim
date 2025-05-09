import AboutCarousel from "./AboutCarousel";

const About = () => {

    const profileImages = [
        "/Ibrahim/iconLogo1.png", 
        "/Ibrahim/iconLogo2.png", 
        "/Ibrahim/iconLogo3.png"
        
      ];

    return (
        <qd className="text-[var(--mist-white)]">

            <div className=" gap-8 p-8 bg-[color:var(--mist-white)] text-[color:var(--forest-dark)] rounded-xs shadow-lg">
                <div className="flex items-center justify-center">
                    <AboutCarousel images={profileImages} rounded="rounded-sm" interval={2000} />
                    {/*<img src="/iconLogo3.png" alt="Profile" className="rounded-full w-48 h-48 object-cover shadow-md" />*/}
                </div>

            </div>

            <div id="main div" className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-[input-mono] pt-4">
                {/* About Section (Always Left-Aligned) */}
                <qd className="pl-0">
                    <h1 className="mb-4 text-[var(--moss)]">About</h1>
                    <p>
                    Ibrahim designs software. He thrives in complex and ambiguous problem spaces focused on delivering, maintaining, and innovating new technologies. He studied Computer Science at Lewis University while pursuing filmmaking—a chapter he will cherish for the rest of his life.
                    </p>
                </qd>

                <qd className="grid grid-cols-2 gap-8 lg:contents self-stretch">
                    {/* Team Section (Normal Alignment) */}
                    <div className="lg:text-right">
                        <h1 className="mb-4 text-[var(--moss)]">Team</h1>
                        <p>Evro Media - Film</p>
                        <p className="mb-40 md:mb-27 text-sm">2020–Present</p>
                        <p>Evro Media - Software</p>
                        <p className="mb-15 text-sm">2025–Present</p>
                    </div>

                    {/* Description Section (Right-Aligned on Large Screens) */}
                    <div className="lg:flex lg:justify-end lg:text-left">
                        <div className="max-w-[300px]">
                            <h1 className="mb-4 text-[var(--moss)]">Description</h1>
                            <p className="mb-8 ">Contractually working with directors and corporations including Chicago Public Schools to create visual content for films and events.</p>
                            <p>Contracted to develop a web application with a custom CMS system.</p>
                        </div>
                    </div>
                </qd>
            </div>



        </qd>
    );
};

export default About;

/*
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-[color:var(--mist-white)] text-[color:var(--forest-dark)] rounded-xs shadow-lg">
                <div className="flex items-center justify-center">
                    <img src="/iconLogo3.png" alt="Profile" className="rounded-full w-48 h-48 object-cover shadow-md" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-lg leading-relaxed">
                        I'm a creative developer with a passion for clean design and deep forests. I love creating meaningful user
                        experiences, inspired by nature and minimalism.
                    </p>

                </div>
            </div>

*/