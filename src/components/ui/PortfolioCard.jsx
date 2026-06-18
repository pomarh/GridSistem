import React from "react";

function PortfolioCard({ title, category, description }) {
    return (
        <>
            <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-56 bg-slate-100"></div>

                <div className="p-6">
                    <span className="text-emerald-500 text-sm font-medium">{category}</span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>

                    <p className="mt-3 text-slate-600">{description}</p>
                </div>
            </article>
        </>
    );
}

export default PortfolioCard;
