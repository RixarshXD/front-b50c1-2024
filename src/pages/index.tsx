import Link from "next/link";
import Perfil from "./components/Perfil";
import Pagina1 from "./Pagina1";
import { useState } from "react";




export default function Home() {


  return (
    <>
      <nav>
        <Link href={"About"}>hola</Link>
        <br></br>
        <Link href={"Pagina2"}>suma de numeros</Link>
        <br></br>
        <Link href={'Pagina3'}>Registro de personas</Link>
      </nav>

      {/* buscar: useState y useEffect */}
      {/* es7 react, simple react snippets, typescript react code */}

      <Perfil Nombre="riki" Apellido="valdes" Edad={15} />
      <Perfil Nombre="riki2" Apellido="valdes2" Edad={20} />

      <Pagina1></Pagina1>
    </>
  );
}
