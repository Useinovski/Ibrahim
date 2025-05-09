const Ideas = () => {
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-[color:var(--fog-gray)] text-[color:var(--forest-dark)]">
            

            

            {['The Porta Holder V1', 'I-racing Friend Connect API', 'Arduino Scheduler'].map((title, idx) => (
                <div
                    key={idx}
                    className="bg-[color:var(--mist-white)] p-5 rounded-xs shadow hover:shadow-lg hover:bg-[color:var(--moss)] transition duration-300"
                >
                    <qd className="text-xl font-semibold mb-2">{title}</qd>
                    <p>
                    <qd className="text-2xl font-bold text-[var(--mist-gray)]">Coming Soon ...</qd>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Ideas;

/*<h2 className="text-2xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>Coming Soon</h2>*/