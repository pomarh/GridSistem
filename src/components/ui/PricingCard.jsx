function PricingCard({ badge, title, price, features, featured = false }) {
    return (
        <article
            className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${featured ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"}`}>
            {badge && <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">{badge}</span>}

            <h3 className="text-3xl font-bold text-slate-900">{title}</h3>

            <p className="mt-4 text-4xl font-bold text-emerald-500">{price}</p>

            <ul className="mt-8 space-y-3 text-slate-600">
                {features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                ))}
            </ul>

            <button className="mt-8 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-medium transition">
                Solicitar Cotización
            </button>
        </article>
    );
}

export default PricingCard;
