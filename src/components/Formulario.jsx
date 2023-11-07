import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"

const Formulario = () => {

    const {datos, handleChangeDatos} = useCotizador()
    const {marca, year, plan} = datos


  return (
    <>
      <form>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
            <select 
                name="marca" id="" 
                className='w-full p-3 bg-white border border-gray-200 rounded-lg'
                onChange={e => handleChangeDatos(e)}
                value={marca}
            >
                <option>-- Selecciona Marca--</option>

                {MARCAS.map(marca => (
                    <option 
                        key={marca.id}
                        value={marca.id}
                    >{marca.nombre}</option>
                ))}
            </select>
        </div>

        <div className="my-5">
            <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
            <select 
                name="year" id="" 
                className='w-full p-3 bg-white border border-gray-200 rounded-lg'
                onChange={e => handleChangeDatos(e)}
                value={year}
            >
                <option value="">-- Selecciona Año--</option>

                {YEARS.map(year => (
                    <option 
                        key={year}
                        value={year}
                    >{year}</option>
                ))}
            </select>
        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">Elige un Plan</label>
            <div className="flex gap-3 items-center">
                {PLANES.map(plan => (
                    <Fragment key={plan.id}>
                        <label>{plan.nombre}</label>
                        <input 
                            type="radio"
                            name="plan"
                            value={plan.id}
                            onChange={e => handleChangeDatos(e)}
                        />
                    </Fragment>
                ))}
            </div>
        </div>

        <input 
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer uppercase p-3 font-bold rounded-full"
            value="Cotizar"
        />
      </form>
    </>
  )
}

export default Formulario
