import Menu from '../components/Menu/menu';
import Henzo from '../components/Henzo/henzo';
import Luann from '../components/Luann/luann';
import Humberto from '../components/Humberto/humberto';

export default function Integrantes() {
    return (
        <>
        <Menu />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
      <Henzo imageSrc="/HenzoFoto.jpg" title="Henzo Boschiero Puchetti - RM555179" />
      <Luann imageSrc="/luann2.jpg" title="Luann Domingos Mariano - RM558548" />
      </div>
        </>
    )
}