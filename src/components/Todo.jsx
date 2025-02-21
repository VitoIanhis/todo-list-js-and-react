import { useState } from "react";
import { Tooltip, Input, Select, Button } from "antd";
import { CheckCircleFilled, EditFilled, DeleteFilled } from "@ant-design/icons";

const Todo = ({ todo, removeTodo, editTodo, completeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const [category, setCategory] = useState(todo.category);

  const handleEditSubmit = () => {
    editTodo(todo.id, text, category);
    setIsEditing(false);
  };

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        {!isEditing ? (
          <>
            <p>{todo.text}</p>
            <p className="category">{todo.category}</p>
          </>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Edita o título"
              style={{ marginBottom: "10px" }}
            />
            <Select
              value={category}
              onChange={(value) => setCategory(value)}
              style={{ width: "100%", marginBottom: "10px" }}
            >
              <Select.Option value="Pessoal">Pessoal</Select.Option>
              <Select.Option value="Estudos">Estudos</Select.Option>
              <Select.Option value="Trabalho">Trabalho</Select.Option>
            </Select>
            <Button type="primary" onClick={handleEditSubmit}>
              Atualizar
            </Button>
          </form>
        )}
      </div>
      <div>
        <Tooltip title="Marcar como concluído">
          <CheckCircleFilled
            color="#008000"
            style={{ padding: 10, color: "#008000" }}
            onClick={() => completeTodo(todo.id)}
          />
        </Tooltip>
        <Tooltip title="Editar tarefa">
          <EditFilled
            color="#4839EB"
            style={{ padding: 10, color: "#4839EB" }}
            onClick={() => setIsEditing(!isEditing)}
          />
        </Tooltip>
        <Tooltip title="Deletar tarefa">
          <DeleteFilled
            color="E73E40"
            style={{ padding: 10, color: "#E73E40" }}
            onClick={() => removeTodo(todo.id)}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Todo;
