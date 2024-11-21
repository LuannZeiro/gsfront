import styles from './Botao.module.css';
import Link from 'next/link';

const Botao = () => {
    return (
        <div className={styles.botao}>
            <Link href="Beneficios">
                <button>SAIBA MAIS!</button>
            </Link>
        </div>
    );
};

export default Botao;

