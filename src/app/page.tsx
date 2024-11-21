import Botao from '../app/components/Botao/botao';
import Menu from '../app/components/Menu/menu';
import Texto from '../app/components/Texto/texto';
import Titulo from '../app/components/Titulo/titulo';
import Texto2 from '../app/components/Texto2/texto2';
import Texto3 from '../app/components/Texto3/texto3';
import Texto4 from '../app/components/Texto4/texto4';

export default function Home() {
    return (
        <>
            <Menu />
            <Titulo />
            <Texto />
            <Texto2 />
            <Texto3 />
            <Texto4 />
            <Botao />

        </>
    );
}

