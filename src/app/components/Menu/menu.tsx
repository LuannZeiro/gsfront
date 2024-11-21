"use client";

import Link from 'next/link';

export default function Menu() {
    return (
        <div className="menu">
            <label className="home">
                <Link href="Home">
                    HOME
                </Link>
            </label>
            <label className="beneficios">
                <Link href="Beneficios">
                    BENEFICIOS
                </Link>
            </label>

            <img src="LOGONOME.png" alt="logo" width="200px" />

            <label className="integrantes">
                <Link href="Integrantes">
                    INTEGRANTES
                </Link>
            </label>

            <label className="login">
                <Link href="Logar">
                    LOGIN
                </Link>
            </label>
        </div>
    );
}
