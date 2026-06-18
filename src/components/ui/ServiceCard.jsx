import React from "react";

function ServiceCard({ icon, title, description }) {
    return (
        <>
            <article className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <div className="text-4xl mb-6">{icon}</div>

                <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>

                <p className="text-slate-600 leading-relaxed">{description}</p>

                <button className="mt-6 text-emerald-500 font-medium">Ver más →</button>
            </article>
        </>
    );
}

export default ServiceCard;
