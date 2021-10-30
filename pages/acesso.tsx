import { useState } from "react";

function Acesso() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onLogin = () => {
        if (email && password) {
            localStorage.setItem("logged", "true");
            window.location.href = "painel";
        }
    }
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="bg-redupe shadow-md rounded m-6 p-6">
                    <div className="mb-4">
                        <label className="text-white text-2xl">Endereço de email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} className="shadow border rounded w-full p-3" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="text-white text-2xl">Senha:</label>
                        <input onChange={(e) => setPassword(e.target.value)} className="shadow border rounded w-full p-3" type="password" />
                    </div>
                    <button onClick={onLogin} className="bg-blupe hover:bg-blue-700 w-full text-white p-3 rounded">Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Acesso;