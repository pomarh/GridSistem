import Container from "../ui/Container";

function Hero() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-500 to-teal-700 pt-5 md:pt-8">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contenido */}
                    <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            Soluciones Digitales para Empresas
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                            Desarrollamos
                            <span className="text-white"> Landing Pages</span>, Sistemas Web y Ecommerce.
                        </h1>

                        <p className="mt-6 text-lg  leading-relaxed">
                            Creamos soluciones digitales modernas, rápidas y escalables para ayudar a tu negocio a crecer y vender más.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button className="border border-white bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-medium transition">
                                Solicitar Cotización
                            </button>

                            <button className="bg-white border border-slate-300 hover:border-emerald-500 hover:text-emerald-500 px-6 py-4 rounded-xl font-medium transition">
                                Ver Servicios
                            </button>
                        </div>
                    </div>

                    {/* Mockup */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-emerald-200  shadow-emerald-100/40 p-6">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-10 bg-slate-100 rounded-lg"></div>

                                <div className="h-32 bg-emerald-100 rounded-xl"></div>

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="h-20 bg-slate-100 rounded-lg"></div>

                                    <div className="h-20 bg-slate-100 rounded-lg"></div>

                                    <div className="h-20 bg-slate-100 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;
