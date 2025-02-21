import { useState } from "react";
import { Button, Input, Select } from "antd";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) {
      alert("Preencha todos os campos!");
      return;
    }
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Select
          value={category}
          onChange={(value) => setCategory(value)}
          style={{ width: 200 }}
          placeholder="Selecione uma categoria"
          options={[
            { value: "Pessoal", label: "Pessoal" },
            { value: "Estudos", label: "Estudos" },
            { value: "Trabalho", label: "Trabalho" },
          ]}
        />
        <Button type="primary" htmlType="submit">
          Adicionar
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
