import { Box, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroesAction } from "../features/heroes/heroAsyncActions";
import { RootState } from "../store/reducers";

const HeroesPage = () => {
  const dispatch = useDispatch();
  const { heroes, loading } = useSelector((state: RootState) => state.hero);

  useEffect(() => {
    // dispatch with action
    dispatch(getHeroesAction());
  }, []);

  return (
    <div>
      <>
        {loading ? (
          <Typography variant="h2">Loading... Please wait..</Typography>
        ) : (
          heroes.map((h) => (
            <Box
              key={h.id}
              mb={2}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography>
                <Typography>
                  <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
                </Typography>
              </Typography>
            </Box>
          ))
        )}
      </>
    </div>
  );
};

export default HeroesPage;
