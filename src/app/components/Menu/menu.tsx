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
            <label className="comofun">
                <Link href="ComoFunciona">
                    COMO FUNCIONA
                </Link>
            </label>

            <img src="LOGONOME.png" alt="logo" width="200px" />

            <label className="integrantes">
                <Link href="/integrantes">
                    INTEGRANTES
                </Link>
            </label>

            <label className="fornecedores">
                <Link href="/fornecedores">
                    FORNECEDORES
                </Link>
            </label>
        </div>
    );
}
