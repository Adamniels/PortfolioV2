export default function Passion() {
    return (
        <section id="passion" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-black uppercase tracking-wider">Passion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Design */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-6">
                                {/* Pencil/Ruler SVG */}
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M16.862 3.487a2.5 2.5 0 013.535 3.535l-12.02 12.02a2 2 0 01-.707.464l-4.01 1.337a.5.5 0 01-.632-.632l1.337-4.01a2 2 0 01.464-.707l12.02-12.02z" />
                                    <path d="M15 6l3 3" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-black">Design</h3>
                            <p className="text-gray-700 text-base">
                                I love crafting beautiful, intuitive interfaces and experiences that people enjoy using on all digital platforms.
                            </p>
                        </div>
                        {/* Development */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-6">
                                {/* Laptop SVG */}
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="3" y="5" width="18" height="12" rx="2" />
                                    <path d="M2 17h20M8 21h8" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-black">Development</h3>
                            <p className="text-gray-700 text-base">
                                With a strong foundation in computer science, I enjoy building clean, maintainable code and scalable software solutions.
                            </p>
                        </div>
                        {/* Involvement */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-6">
                                {/* Users SVG */}
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="9" cy="7" r="4" />
                                    <circle cx="17" cy="11" r="4" />
                                    <path d="M17 15v2a4 4 0 01-4 4H5a4 4 0 01-4-4v-2a4 4 0 014-4h8a4 4 0 014 4z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-black">Involvement</h3>
                            <p className="text-gray-700 text-base">
                                I love collaborating, teaching, and being part of communities that share my passion for tech and creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 