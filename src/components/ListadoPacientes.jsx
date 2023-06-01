import { useEffect } from 'react'
import Paciente from "./Paciente"

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  return (
    <div className=" md:w-1/2 lg:w-3/5">

        { pacientes.length == 0 ? (
           <>
              <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
              <p className=" text-lg text-center mt-5 mb-8">
                  Comienza agregando pacientes 
                  <span className=" font-bold text-indigo-600"> y apareceran en este lugar</span>
              </p>
           </> 
        ) : (
            <>
                    
              <h2 className="font-black text-center text-3xl">push Pacientes</h2>
              <p className=" text-lg text-center mt-5 mb-8">
                  Administra tus
                  <span className=" font-bold text-indigo-600"> Pacientes y Citas</span>
              </p>
              <div className=" md:h-screen md:overflow-y-scroll">
                  { pacientes.map(paciente =>
                    <Paciente 
                      paciente= { paciente } 
                      key= { paciente.id }
                      setPaciente = { setPaciente }
                      eliminarPaciente = { eliminarPaciente }
                    />
                  )}
              </div>
              
            </>
        )}

        
    </div>
  )
}

export default ListadoPacientes
