import { Button, Drawer, Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import { useState } from "react";
import personalValues from "../../app-data/personal-values";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const TestDrawer = styled(Drawer)`
  .MuiPaper-root {
    height: 12dvh;
    padding-left: 0 5dvw 0 5dvw;
  }
`;

const ContinueButton = styled(Button)`
  color: ${(props) => props.theme.palette.secondary.main};
`;

export default function PersonalValuesTest() {
  const navigate = useNavigate();
  const values = personalValues;
  const isTestPage = true;
  const [chosenValues, setChosenValues] = useState([]);

  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{ flexGrow: 1, height: "calc(100% - 14dvh)", paddingBottom: "2vh" }}
      >
        <Grid item xs={12} zeroMinWidth sx={{ margin: "0px 5px 5px 5px" }}>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={12} zeroMinWidth>
              <Typography color="secondary" variant="h4" fontWeight="bold">
                Identify values that matter most to you.
              </Typography>
            </Grid>
            <Grid item xs={12} zeroMinWidth>
              <Typography variant="body1">
                Please select ten values in boxes below.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          sx={{ overflowY: "auto", height: "inherit" }}
        >
          <PersonalValueCards
            values={values}
            isTestPage
            chosenValues={chosenValues}
            setChosenValues={setChosenValues}
          />
        </Grid>
      </Grid>
      <TestDrawer anchor="bottom" variant="persistent" open={isTestPage}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} sm={6}>
            Selected Values: {chosenValues?.length}
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContinueButton
              color="primary"
              variant="contained"
              fullWidth
              disabled={chosenValues?.length !== 10}
              onClick={() =>
                navigate("/comparison-test", { state: chosenValues })
              }
            >
              {chosenValues?.length === 10
                ? "Continue"
                : `Select ${10 - chosenValues?.length} more`}
            </ContinueButton>
          </Grid>
        </Grid>
      </TestDrawer>
    </>
  );
}
