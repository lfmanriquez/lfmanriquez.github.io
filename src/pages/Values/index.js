import { Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import personalValues from "../../app-data/personal-values";
import styled from "@emotion/styled";

const HeaderGrid = styled(Grid)`
  background-color: white;
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.15) 0 4px 2px -2px;
  position: sticky;
  top: 0;
`;

export default function Values() {
  const values = personalValues;
  return (
    <Grid
      container
      spacing={1}
      sx={{
        height: "100%",
        overflow: "auto",
      }}
    >
      <HeaderGrid item xs={12} sx={{ paddingX: "2dvw" }}>
        <Grid container textAlign="center">
          <Grid item xs={12}>
            <Typography variant="h6" color="secondary" fontWeight="bolder">
              Personal Values List
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ margin: "0 1% 1% 1%" }}>
            <Typography variant="subtitle2">
              Below is a compilation of the values used in the DigiQuiz, crafted
              from our exploration into fundamental human values. Each value is
              accompanied by a brief description or synonyms to provide a simple
              understanding while giving you wiggle room for meaning.
            </Typography>
          </Grid>
        </Grid>
      </HeaderGrid>
      <Grid item xs={12}>
        <PersonalValueCards values={values} />
      </Grid>
    </Grid>
  );
}
