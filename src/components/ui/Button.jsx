function Button({ children, variant = "primary", className = "", ...props }) {
    const styles = {
        primary: "bg-emerald-500 hover:bg-emerald-600 text-white",

        secondary: "border border-slate-300 hover:border-emerald-500 hover:text-emerald-500 text-slate-700",
    };

    return (
        <button className={`px-6 py-3 rounded-xl font-medium transition duration-300 ${styles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
