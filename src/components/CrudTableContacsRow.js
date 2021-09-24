import React from "react";

const CrudTableRow = ({ element, setDataToEdit, deleteData }) => {
  let { name, email ,telefone, id } = element;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{telefone}</td>
      <td>
        <button style={{backgroundColor:"orange"}} onClick={() => setDataToEdit(element)}>Editar</button>
        <button style={{backgroundColor:"red"}}onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
