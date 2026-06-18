import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import PortfolioCard from "../ui/PortfolioCard";

function Portfolio() {
    return (
        <Section id="portfolio">
            <Container>
                <SectionTitle
                    badge="Portfolio"
                    title="Proyectos que generan resultados"
                    description="Diseños modernos, rápidos y preparados para crecer."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PortfolioCard category="Landing Page" title="Landing para Consultora" description="Página enfocada en generación de leads." />

                    <PortfolioCard category="Sistema Web" title="Sistema de Inventario" description="Control completo de productos y movimientos." />

                    <PortfolioCard category="Ecommerce" title="Tienda Online" description="Catálogo, carrito y gestión de pedidos." />

                    <PortfolioCard category="Sistema Web" title="Sistema de Reservas" description="Reservas y administración de clientes." />
                </div>
            </Container>
        </Section>
    );
}

export default Portfolio;
