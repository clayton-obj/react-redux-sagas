import React, { useEffect } from "react";
import "./App.css";
import { getRepositoryRequest } from "./store/ducks/repositories/actions";
import { getUserRequest } from "./store/ducks/users/actions";
import RepositoryCard from "./components/RepositoryCard";
import { useAppDispatch, useAppSelector } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector(({ userState }) => userState.user);
  const repositoryState = useAppSelector(
    ({ repositoryState }) => repositoryState.repositories
  );
  const selectedRepositoryState = useAppSelector(
    ({ repositoryState }) => repositoryState.selectedRepositories
  );

  useEffect(() => {
    dispatch(getUserRequest("claytonrss"));
  }, [dispatch]);

  function handleRepositoryRequest() {
    dispatch(getRepositoryRequest("claytonrss"));
  }

  return (
    <div className="App">
      <h1>GitHub Info</h1>
      <div className="user-info">
        <img
          src={userState.avatar_url}
          alt="Avatar do usuário"
          loading="lazy"
          width="64px"
          height="64px"
          className="avatar"
        />
        <p>{userState.name}</p>
      </div>
      <div>
        <button onClick={handleRepositoryRequest}>Buscar repositórios</button>
      </div>
      <div className="repository-list">
        <div>
          <h3>Lista de repositórios</h3>
          <ul>
            {repositoryState?.map((repository) => (
              <RepositoryCard {...repository} />
            ))}
          </ul>
        </div>
        <div>
          <h3>Lista de repositórios Selecionados</h3>
          <ul className="selected-list">
            {selectedRepositoryState?.map((repository) => (
              <RepositoryCard {...repository} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
