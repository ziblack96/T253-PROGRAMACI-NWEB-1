import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
function App() {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");

  const enviarFormulario = () => {
    if (nombre !== "" && email !== "" && mensaje !== "") {
      {
        if (email.includes("@")) {
          Swal.fire({
            title: "Mensaje Completado",
            text: "¡Tu mensaje ha sido enviado exitosamente, pronto me comunicare contigo!",
            icon: "success",
          });
        } else
          Swal.fire({
            title: "Informacion Incorrecta",
            text: "¡Tu campo correo electronico debe tener un correo valido, intenta de nuevo!",
            icon: "warning",
          });
      }
    } else {
      Swal.fire({
        title: "El mensaje no puede ser enviado",
        text: "Uno de los 3 campos esta vacio, verifica otra vez e intentalo de nuevo!",
        icon: "error",
      });
    }
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="w-120 min-h-auto flex justify-content-center items-center">
      <h1 className="font-bold  text-2xl text-center ">
        Formulario de Contacto
      </h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="text-black text-lg font-bold mb-2">
            Ingrese su primer nombre y apellido:{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="Cristhian Castañeda"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={"border rounded-lg w-full py-2 px-3 text-black"}
            required
          />{" "}
        </div>
        <br />
        <div className="mb-4">
          <label className="text-black text-lg font-bold mb-2">
            Ingrese su correo electronico:
          </label>
          <br />
          <input
            type="email"
            placeholder="cristhiancastaneda@hotmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={"border rounded-lg w-full py-2 px-3 text-black"}
            required
          />{" "}
        </div>
        <br />
        <label className="text-black text-lg font-bold mb-2">
          Ingrese su mensaje:
        </label>
        <br />
        <textarea
          maxLength={250}
          placeholder="Ingrese su mensaje:"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="ring-gray-900 ring w-full rounded-lg text-center"
          required
        />{" "}
        <br />
        <button
          type="button"
          className="bg-blue-600 px-6 py-2 rounded-lg text-white
          hover:bg-blue-400 hover:text-gray-600 shadow-lg transition-shadow
          "
          onClick={enviarFormulario}
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default App;
