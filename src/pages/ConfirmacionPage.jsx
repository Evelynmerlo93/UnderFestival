import React from "react";

const ConfirmacionPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-8 pt-28">
            <div className="bg-gray-800 p-10 rounded-xl text-center shadow-2xl max-w-lg">
                <h1 className="text-4xl font-extrabold text-green-400 mb-6">
                    ¡Compra Exitosa!
                </h1>

                <p className="text-lg text-gray-300 mb-4">
                    Tu reserva ha sido registrada correctamente.
                </p>

                <p className="text-sm text-gray-500">
                    Recibirás un correo con los detalles de la entrada.
                </p>
            </div>
        </div>
    );
};

export default ConfirmacionPage;
