import React from "react";

function SectionTitle({ badge, title, description, center = true }) {
    return (
        <>
            <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
                {badge && <span className="text-emerald-500 font-semibold">{badge}</span>}

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>

                {description && <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>}
            </div>
        </>
    );
}

export default SectionTitle;
