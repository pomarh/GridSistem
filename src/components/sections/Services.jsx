import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function Services() {
    return (
        <>
            <Section id="services" className="bg-gray-200">
                <Container>
                    <SectionTitle
                        badge="Nuestros Servicios"
                        title="Soluciones digitales para cada etapa de tu negocio"
                        description="Desde una landing page hasta sistemas empresariales."
                    />

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard icon="🚀" title="Landing Pages" description="Diseñadas para captar clientes y aumentar conversiones." />

                        <ServiceCard icon="⚙️" title="Sistemas Web" description="Automatiza procesos y mejora la productividad." />

                        <ServiceCard icon="🛒" title="Ecommerce" description="Tiendas online modernas y escalables." />
                    </div>
                </Container>
            </Section>
        </>
    );
}

export default Services;
