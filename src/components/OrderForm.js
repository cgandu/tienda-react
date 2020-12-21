import React, {useState} from "react";
import MensajeValidacion from "./MensajeValidacion.js";

function OrderForm({ buyer, handleChange, processOrder }) {


const [confirmedEmail, setConfirmedEmail] = useState("");

function handleConfirmEmailChange({target: {value}}){

setConfirmedEmail(value);

}

function handleSubmit(evt) {
  evt.preventDefault();
  if (buyer.email === confirmedEmail){
    processOrder();
  }

}


  return (
    <>
      <div style={{ textAlign: "-webkit-center" }}>
        <div
          style={{
            backgroundColor: "white",
            maxWidth: "60%",
            padding: "3%"
          }}
        >
          <form id="form-buyer" onSubmit={handleSubmit}>
            <div className="form-group">
            <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Nombre y apellido</label>
              <input
                required
                value={buyer.name}
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
                placeholder="Mi nombre y apellido"
              /></div>
                              <div className="form-group col-md-6">
                  <label htmlFor="inputPhone">Telefono</label>
                  <input
                    required
                    value={buyer.phone}
                    onChange={handleChange}
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="+54 9 112345 6789"
                  />
                </div>
            </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail">E-mail</label>
                  <input
                    required
                    value={buyer.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="micorreo@email.com"
                    
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputConfirmEmail">Confirmar E-mail</label>
                  <input
                    required
                    type="email"
                    defaultValue={confirmedEmail}
                    onChange={handleConfirmEmailChange}
                    className="form-control"
                    name="confirmaEmail"
                    placeholder="micorreo@email.com"
                    
                  />
                </div>

              </div>
              <MensajeValidacion e1={buyer.email} e2={confirmedEmail}/>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputAddressLineOne">Domicilio (primera linea)</label>
                  <input
              
                    value={buyer.address.line1}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="line1"
                    placeholder="Direccion 1234"
                  />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="inputAddressLineTwo">Domicilio (segunda linea)</label>
                  <input
              
                    value={buyer.address.line2}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="line2"
                    placeholder="Piso, departamento, puerta..."
                  />
                </div>
                <div className="form-row col-md-12">
                  <div className="form-group col-md-5">
                    <label htmlFor="inputCity">Ciudad - Localidad</label>
                    <input
                
                    onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="city"
                      value={buyer.address.city}
                      
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">Provincia</label>
                    <select
                
                    onChange={handleChange}
                      name="province"
                      className="form-control"
                      value={buyer.address.province}
                      
                    >
                      <option>Seleccionar...</option>
                      <option>Ciudad Autonoma de Buenos Aires</option>
                      <option>Provincia de Buenos Aires</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputZip">Codigo Postal</label>
                    <input
                
                    onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="postalCode"
                      value={buyer.address.postalCode}
                      
                    />
                  </div>
                </div>
              </div>
            </div>

            <button disabled={false}
              type="submit"

              className="btn btn-primary"
            >
              Continuar compra
            </button>
            
            
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderForm;
