import Menu from '../app/components/Menu/menu';
import Titulo from '../app/components/Titulo/titulo';
import Botao from './components/Botao/botao';
import Texto from './components/Texto/texto';

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
