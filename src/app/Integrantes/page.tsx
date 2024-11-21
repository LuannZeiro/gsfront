import Menu from '../components/Menu/menu';
import Henzo from '../components/Henzo/henzo';

export default function Integrantes() {
    return (
        <>
        <Menu />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Henzo imageSrc="/HenzoFoto.jpg" title="Henzo" />
    </div>
        </>
    )
}