import React, { useEffect } from "react";
import "./App.css";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  setSelectedRepositoryRequest,
  getRepositoryRequest,
  getUserRequest,
  RepositoryType,
  RootState,
} from "./store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

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
  function handleSelectRepo(repo: RepositoryType) {
    dispatch(setSelectedRepositoryRequest(repo.id));
  }

  return (
    <div className="App">
      <h1>GitHub Info</h1>
      <div>
        <p>{userState.name}</p>
        <img
          src={userState.avatar_url}
          alt="Avatar do usuário"
          loading="lazy"
          width="32px"
          height="32px"
        />
      </div>
      <div>
        <button onClick={handleRepositoryRequest}>Buscar repositórios</button>
      </div>
      <div>
        <div>
          <h3>Lista de repositórios</h3>
          <ul>
            {repositoryState?.map((repo) => (
              <li className="card-repo" key={repo.id}>
                <input
                  type="checkbox"
                  onChange={() => handleSelectRepo(repo)}
                />
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Lista de repositórios Selecionados</h3>
          <ul>
            {selectedRepositoryState?.map((repo) => (
              <li className="card-repo" key={repo.id}>
                <input
                  type="checkbox"
                  onChange={() => handleSelectRepo(repo)}
                />
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
