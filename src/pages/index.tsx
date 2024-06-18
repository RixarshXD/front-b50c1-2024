
import Link from "next/link";
import Perfil from "./components/Perfil";


export default function Home() {
  return (
    <>

    <nav>
      <Link href={"About"}>hola</Link>
    </nav>

    {/* buscar: useState y useEffect */}


    <p>hola</p>
    <Perfil Nombre="riki" Apellido="valdes" Edad={15}/>
    <Perfil Nombre="riki2" Apellido="valdes2" Edad={20}/>
    </>
  );
}
