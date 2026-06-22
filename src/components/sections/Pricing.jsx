import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import PricingCard from "../ui/PricingCard";

function Pricing() {
    return (
        <Section id="pricing" className="bg-slate-50">
            <Container>
                <SectionTitle badge="Planes" title="Planes para Landing Pages" description="Elige el plan que mejor se adapte a tu negocio." />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PricingCard
                        title="Básico"
                        price="Bs. 500"
                        features={["1 Página", "Diseño Responsive", "Formulario de Contacto", "Botón WhatsApp", "SEO Básico"]}
                    />

                    <PricingCard
                        badge="Más Popular"
                        title="Profesional"
                        price="Bs. 900"
                        featured={true}
                        features={[
                            "Hasta 5 Secciones",
                            "Diseño Premium",
                            "Formulario Avanzado",
                            "WhatsApp Integrado",
                            "SEO Optimizado",
                            "Galería de Imágenes",
                        ]}
                    />

                    <PricingCard
                        title="Empresarial"
                        price="Bs. 1500"
                        features={["Hasta 10 Secciones", "Diseño Personalizado", "Blog", "SEO Completo", "Integraciones", "Soporte Prioritario"]}
                    />
                </div>
            </Container>
        </Section>
    );
}

export default Pricing;
