import styled from "@emotion/styled";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { useLocation } from "react-router";
import personalValues from "../../app-data/personal-values";
import { useEffect, useState } from "react";

const ContainerGrid = styled(Grid)`
  height: 100%;
  padding: 5%;
  padding-bottom: 12vh;

  @media screen and (max-height: 390px) {
    padding-bottom: 30vh;
  }
`;

export default function Results() {
  const values = personalValues;
  const { state: results } = useLocation();

  const [topValues, setTopValues] = useState();

  useEffect(() => {
    if (results?.length) {
      let valuesToDisplay = values.filter((v) =>
        results.find((r) => r.id === v.id)
      );
      setTopValues(valuesToDisplay);
    }
  }, []);

  return (
    <ContainerGrid
      container
      spacing={4}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography variant="h4">Your Personal Values Results</Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          {topValues?.map((t) => (
            <ListItem key={t.id}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography fontWeight="bold">{t.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{t.description}</Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Grid>
    </ContainerGrid>
  );
}
