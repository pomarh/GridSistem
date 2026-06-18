import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

function Contact() {
    return (
        <Section id="contact" className="bg-gray-200">
            <Container>
                <SectionTitle
                    badge="Contacto"
                    title="¿Listo para impulsar tu negocio?"
                    description="Cuéntanos tu idea y te ayudaremos a encontrar la mejor solución digital para tu empresa."
                />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Información */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Hablemos de tu proyecto</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-slate-900">WhatsApp</p>

                                <p className="text-slate-600">+591 70000000</p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">Correo</p>

                                <p className="text-slate-600">contacto@gridsistem.com</p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">Horario</p>

                                <p className="text-slate-600">
                                    Lunes a Viernes
                                    <br />
                                    08:00 - 18:00
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-8">
                        <form className="space-y-5">
                            <div>
                                <label className="block mb-2 font-medium">Nombre</label>

                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Correo</label>

                                <input
                                    type="email"
                                    placeholder="correo@empresa.com"
                                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Servicio</label>

                                <select className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500">
                                    <option>Landing Page</option>

                                    <option>Sistema Web</option>

                                    <option>Ecommerce</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Mensaje</label>

                                <textarea
                                    rows="5"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 resize-none"
                                />
                            </div>

                            <Button className="w-full">Solicitar Cotización</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default Contact;
