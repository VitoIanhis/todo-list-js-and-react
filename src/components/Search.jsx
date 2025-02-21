import { Input } from "antd";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Buscar tarefas:</h2>
      <Input
        placeholder="Digite o título da tarefa"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
