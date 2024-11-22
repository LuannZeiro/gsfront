//Integrantes

import Menu from '../components/Menu/menu';
import Henzo from '../components/Henzo/henzo';
import Luann from '../components/Luann/luann';
import Humberto from '../components/Humberto/humberto';
import TituloIntegrantes from '../components/TituloIntegrantes/titulointegrantes';

export default function Integrantes() {
    return (
        <>
        <Menu />
        <TituloIntegrantes />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
      <Henzo imageSrc="/HenzoFoto.jpg" title="Henzo Boschiero Puchetti - RM555179" />
      <Luann imageSrc="/luann2.jpg" title="Luann Domingos Mariano - RM558548" />
      <Humberto imageSrc="/HumbertoFoto.jpg" title="Humberto Souza - RM558482" />
      </div>
        </>
    )
}
