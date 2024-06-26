import Link from "next/link";
import Perfil from "./components/Perfil";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";

export default function Home() {
  return (
    <>
      <nav>
        <Link href={"About"}>hola</Link>
        <br></br>
        <Link href={"Pagina2"}>suma de numeros</Link>
      </nav>

      {/* buscar: useState y useEffect */}
      {/* es7 react, simple react snippets, typescript react code */}

      <Perfil Nombre="riki" Apellido="valdes" Edad={15} />
      <Perfil Nombre="riki2" Apellido="valdes2" Edad={20} />

      <Pagina1></Pagina1>
    </>
  );
}
