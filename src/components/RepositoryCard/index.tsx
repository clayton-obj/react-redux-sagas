import React, { useState } from "react";
import { useAppDispatch } from "../../store";
import { RepositoryType } from "../../store/ducks/repositories/types";
import { setSelectedRepositoryRequest } from "./../../store/ducks/repositories/actions";

const RepositoryCard: React.FC<RepositoryType> = ({ id, name }) => {
  const dispatch = useAppDispatch();
  const [isSelected, setIsSelected] = useState(false);

  function handleSelectRepo(repositoryId: number) {
    dispatch(setSelectedRepositoryRequest(repositoryId));
    setIsSelected(!isSelected);
  }

  return (
    <li
      className={`repository-card ${isSelected ? "selected" : ""}`}
      key={id}
      onClick={() => handleSelectRepo(id)}
    >
      {name}
    </li>
  );
};

export default RepositoryCard;
