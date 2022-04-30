import React, { useEffect } from "react";
import "./App.css";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUserRequest, RootState } from "./store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

function App() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUserRequest("claytonrss"));
  }, [dispatch]);
  

  function handleRepositoryRequest(){
    
  }

  return (
    <div className="App">
      <h1>GitHub Info</h1>
      <p>{userState.name}</p>
      <p>{userState.avatar_url}</p>
      <div><button onClick={handleRepositoryRequest}>Buscar repositórios</button></div>
      {/* {useRepositories?.map((repo) => (
        <div key={repo.id}>
          <div>{repo.name}</div>
          <div>{repo.description}</div>
        </div>
      ))} */}
    </div>
  );
}

export default App;
