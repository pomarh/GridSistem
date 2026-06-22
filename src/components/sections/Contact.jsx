import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

function Contact() {
    return (
        <Section id="contact" className="relative bg-[url('/img/bg-contact.jpg')] bg-cover bg-center">
            <div className="">
                <Container>
                    <SectionTitle
                        badge="Contacto"
                        title="¿Listo para impulsar tu negocio?"
                        description="Cuéntanos tu idea y te ayudaremos a encontrar la mejor solución digital para tu empresa."
                        titleClassName="text-white"
                    />

                    <div className="m-auto md:mx-10 lg:mx-80 ">
                        {/* Formulario */}
                        <div className="bg-white/95 border border-slate-200 rounded-2xl p-8">
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
            </div>
        </Section>
    );
}

export default Contact;
