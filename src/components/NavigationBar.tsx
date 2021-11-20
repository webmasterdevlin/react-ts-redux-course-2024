import { useNavigate } from "react-router-dom";
import { pathNames } from "../LazyRoutes";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(pathNames.home)}>HOME</button>
      <button onClick={() => navigate(pathNames.heroes)}>HEROES</button>
      <button onClick={() => navigate(pathNames.villains)}>VILLAINS</button>
    </div>
  );
};

export default NavigationBar;
