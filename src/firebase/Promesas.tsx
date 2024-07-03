import { Persona } from "@/interfaces/Interfaces";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";


export const registrarPersona = async(persona:Persona) =>{
    const docRef = await addDoc(collection(db, "personas"), persona);
}

export const obtenerPersonas = async()=>{
    const colRef= collection(db, "personas");

    const querySnapshot = await getDocs(colRef);

    let personas:Persona[] = []
    querySnapshot.forEach((doc) => {
        let persona:Persona = {
            nombre:doc.data().nombre,
            apellido:doc.data().apellido,
            rut:doc.data().rut,
            correo:doc.data().correo,
            edad:doc.data().edad,
            fechaNacimiento:doc.data().fechaNacimiento
        }
        personas.push(persona)
    });
    return personas
}