import Botao from '../components/Botao/botao';
import Menu from '../components/Menu/menu';
import Texto from '../components/Texto/texto';
import Titulo from '../components/Titulo/titulo';
import Texto2 from '../components/Texto2/texto2';
import Texto3 from '../components/Texto3/texto3';
import Texto4 from '../components/Texto4/texto4';
import Login from '../components/Login/login';

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
            <Login />
        </>
    );
}

