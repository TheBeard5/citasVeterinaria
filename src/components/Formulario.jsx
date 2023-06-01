import { useState, useEffect } from "react"
import Error from "./Error";


function Formulario( { pacientes, setPacientes, paciente, setPaciente } ) {
  const [nombre, setNombre] = useState("");
  const [propetario, setPropetario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString();

    return random + fecha;
  }

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropetario(paciente.propetario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  },[paciente]);

  const handleSubmit = (e) =>{
    e.preventDefault();

    if([ nombre, propetario, email, fecha, sintomas ].includes(''))
    {
      setError(true);
    }else{
      setError(false);
      const objetoPaciente = {
        nombre
        ,propetario
        ,email
        ,fecha
        ,sintomas
      }

      if(paciente.id){
        
        objetoPaciente.id = paciente.id;
        console.log(objetoPaciente);
        const nuevoArray = pacientes.map((pacientesMap)=>{
          if (pacientesMap.id == objetoPaciente.id) {
            return objetoPaciente;
          }else{
            return pacientesMap;
          }
          
        });
        setPacientes(nuevoArray);
        setPaciente({});
      }else{
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);

      }
      



      setNombre('');
      setPropetario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }
  }
  
  return (
    <div className=" md:w-1/2 lg:w-2/5 mb-5 mx-3">
      <h1 className=" font-black text-center text-3xl">Seguimiento Pacientes</h1>

      <p className=" mt-5 text-lg text-center">Añade Pacientes y 
        <span className=" text-indigo-600 font-bold"> Adminstralos</span>
      </p>

      <form action="" className=" bg-white mt-8 rounded shadow-md p-5" onSubmit={handleSubmit}>
        {error && ( <Error> <p>Todos los campos son necesarios</p> </Error> )}
        <div className=" flex flex-col">
          <label htmlFor="nombreMascota" className=" uppercase font-bold text-gray-700">Nombre Mascota</label>
          <input id="nombreMascota" type="text" placeholder="Nombre de la Mascota" 
            className=" block border-2 p-3 mt-2 rounded-md mb-3"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="nombrePropetario" className=" uppercase font-bold text-gray-700">Nombre Propetario</label>
          <input id="nombrePropetario" type="text" placeholder="Nombre del Propetario" 
            className=" block border-2 p-3 mt-2 rounded-md mb-3"
            value={propetario}
            onChange={(e)=> setPropetario(e.target.value)}
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="email" className=" uppercase font-bold text-gray-700">Email</label>
          <input id="email" type="email" placeholder="Email Contacto Propetario" 
            className=" block border-2 p-3 mt-2 rounded-md mb-3"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="alta" className=" uppercase font-bold text-gray-700">Alta</label>
          <input id="alta" type="date"
            className=" block border-2 p-3 mt-2 rounded-md mb-3"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="sintomas" className=" uppercase font-bold text-gray-700">Sintomas</label>
            
          <textarea id="sintomas" className=" block border-2 p-3 mt-2 rounded-md mb-3" placeholder="Describe los sintomas" 
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
          >

          </textarea>
        </div>
        <input type="submit" value={ Object.keys(paciente).length > 0 ? "Editar Paciente" : "Agregar Paciente" }
          className=" bg-indigo-600 w-full py-2 text-white uppercase font-bold cursor-pointer hover:bg-indigo-800 transition-all" 
          
        />
      </form>
    </div>
  )
}

export default Formulario
//rfce genera el componente basico