import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    const phone = "59175879437";

    const message = encodeURIComponent("Hola Estoy interesado en sus servicios. Me gustaria recibir mas informacion");
    return (
        <>
            <a
                href={`https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition z-50">
                <FaWhatsapp className="text-3xl" />
            </a>
        </>
    );
}

export default WhatsAppButton;
