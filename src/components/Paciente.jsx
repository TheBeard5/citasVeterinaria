
function Paciente({ paciente, setPaciente, eliminarPaciente}) {

    const{nombre, propetario, email, fecha, sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("Estas seguro que deseas elimiarlo?");
        if(respuesta){
            eliminarPaciente(id);
        }
    }
  return (
      <div className=" m-3 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre:
              <span className=" font-normal normal-case"> { nombre } </span>
          </p>
          <p className=" font-bold mb-3 text-gray-700 uppercase">Propietario:
              <span className=" font-normal normal-case"> { propetario } </span>
          </p>
          <p className=" font-bold mb-3 text-gray-700 uppercase">Email:
              <span className=" font-normal normal-case"> { email } </span>
          </p>
          <p className=" font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
              <span className=" font-normal normal-case"> { fecha } </span>
          </p>
          <p className=" font-bold mb-3 text-gray-700 uppercase"> Sintomas:
              <span className=" font-normal normal-case"> { sintomas } </span>
          </p>

          <div className=" flex justify-between mt-8">
            <button type="button" className=" px-10 py-3 text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-800 transition-all" 
                onClick={()=> setPaciente(paciente)}
            >
                Editar
            </button>
            <button type="button" className=" px-10 py-3 text-white uppercase bg-red-600 rounded-lg hover:bg-red-800 transition-all"
                onClick={ handleEliminar }>
                Eliminar
            </button>
          </div>

      </div>
  )
}

export default Paciente
