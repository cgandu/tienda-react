import React from "react";

function OrderForm({ buyer, handleChange, processOrder }) {
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
          <form id="form-buyer">
            <div className="form-group">
              <label htmlFor="inputName">Nombre y apellido</label>
              <input
                value={buyer.name}
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
                placeholder="Mi nombre y apellido"
              />
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputPhone">Telefono</label>
                  <input
                    value={buyer.phone}
                    onChange={handleChange}
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="+54 9 112345 6789"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPhone">Email</label>
                  <input
                    value={buyer.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="micorreo@email.com"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputName">Domicilio (primera linea)</label>
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
                  <label htmlFor="inputName">Domicilio (segunda linea)</label>
                  <input
                    value={buyer.address.line2}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="line2"
                    placeholder="Piso, departamento, puerta..."
                  />
                </div>
                <div class="form-row col-md-12">
                  <div class="form-group col-md-5">
                    <label htmlFor="inputCity">Ciudad - Localidad</label>
                    <input
                      type="text"
                      class="form-control"
                      name="city"
                      value={buyer.address.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">Provincia</label>
                    <select
                      name="province"
                      class="form-control"
                      value={buyer.address.province}
                      onChange={handleChange}
                    >
                      <option selected>Seleccionar...</option>
                      <option>Ciudad Autonoma de Buenos Aires</option>
                      <option>Provincia de Buenos Aires</option>
                    </select>
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputZip">Codigo Postal</label>
                    <input
                      type="text"
                      class="form-control"
                      name="postalCode"
                      value={buyer.address.postalCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => processOrder()}
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
