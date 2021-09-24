import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  email: "",
  telefone: "",
  id: null
};


const CrudContacForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.telefone || !form.email) {
      alert("Dados incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Adicionar"}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
          value={form.name}
          required
        />
         <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone exemplo: (92) 98834-5555"
          onChange={handleChange}
          pattern="\([0-9]{2}\) [0-9]{5}[-][0-9]{4}"
          value={form.telefone}
          required
        />

        <input style={{backgroundColor:"green"}}type="submit" value="Enviar" />
        <input type="reset" value="Limpar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudContacForm;
