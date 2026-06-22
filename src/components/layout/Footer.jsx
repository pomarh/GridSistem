import React from "react";
import Container from "../ui/Container";

function Footer() {
    return (
        <>
            <footer className="bg-gray-800 border-t border-slate-200 py-8 mt-20">
                <Container>
                    <div className=" flex flex-col md:flex md:flex-row md:justify-around">
                        <div className="text-[14px]">
                            <h3 className="text-2xl font-bold text-white mb-6">Hablemos de tu proyecto</h3>

                            <div className="space-y-6 pt-5">
                                <div>
                                    <p className="font-semibold text-white">WhatsApp</p>

                                    <p className="text-emerald-300">+591 75879437</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-white">Correo</p>

                                    <p className="text-emerald-300">contacto@gmail.com</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-white">Horario</p>

                                    <p className="text-emerald-300">
                                        Lunes a Viernes
                                        <br />
                                        08:00 - 18:00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-[14px] pt-5">
                            <h3 className="text-2xl font-bold text-white mb-6">Servicios</h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="font-semibold text-white">Landing page</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-white">Sistemas Web</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-white">E-commerce</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-[14px] pt-5">
                            <h3 className="text-2xl font-bold text-white mb-6">Planes</h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="font-semibold text-white">Basico</p>

                                    <p className="text-emerald-300">350 bs.</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-white">Profesional</p>

                                    <p className="text-emerald-300">900 bs.</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-white">Empresarial</p>

                                    <p className="text-emerald-300">a partir de 3500 bs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-slate-500 pt-10">© 2026 GridSistem. Todos los derechos reservados.</p>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
