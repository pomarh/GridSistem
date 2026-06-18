import React from "react";
import { useState } from "react";
import Container from "../ui/Container";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Container className=" h-20 flex items-center justify-between">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold tracking-tight">
                        <span className="text-slate-900">Grid</span>
                        <span className="text-emerald-500">Sistem</span>
                    </h1>

                    {/* Menú Desktop */}
                    <ul className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
                        <li>
                            <a href="#" className="hover:text-emerald-500 transition">
                                Inicio
                            </a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-emerald-500 transition">
                                Servicios
                            </a>
                        </li>

                        <li>
                            <a href="#portfolio" className="hover:text-emerald-500 transition">
                                Portafolio
                            </a>
                        </li>

                        <li>
                            <a href="#contact" className="hover:text-emerald-500 transition">
                                Contacto
                            </a>
                        </li>
                    </ul>

                    {/* Botón Desktop */}
                    <button className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-medium transition">
                        Cotizar
                    </button>

                    {/* Botón Mobile */}
                    <button className="md:hidden text-3xl text-slate-900" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </Container>

                {/* Menú Mobile */}
                {menuOpen && (
                    <div className="md:hidden border-t border-slate-200 bg-white">
                        <ul className="flex flex-col p-6 gap-5 text-slate-700 font-medium">
                            <li>
                                <a href="#">Inicio</a>
                            </li>

                            <li>
                                <a href="#services">Servicios</a>
                            </li>

                            <li>
                                <a href="#portfolio">Portafolio</a>
                            </li>

                            <li>
                                <a href="#contact">Contacto</a>
                            </li>

                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl transition">Cotizar</button>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
