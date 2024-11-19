import Botao from '../components/Botao/botao';
import Menu from '../components/Menu/menu';
import Texto from '../components/Texto/texto';
import Titulo from '../components/Titulo/titulo';

export default function Home() {
    return (
        <>
            <Menu />
            <Titulo />
            <Texto />
            <Botao />
        </>
    );
}
