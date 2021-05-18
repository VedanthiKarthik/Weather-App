import { AppBar, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core'
import CloudTwoToneIcon from '@material-ui/icons/CloudTwoTone';
import { useState } from 'react';
import CardComponent from './components/CardComponent';
import Search from './components/Search';
import WeatherDtails from './components/WeatherDetails';
import MainDetails from './components/MainDetails'
import styles from './styles/styles'
import { fetchData } from './api/fetchWeather'
import initialData from './api/data'




function App() {
  const styleClass = styles()

  const [res, setResult] = useState(initialData)



  const getResult = async (e) => {
    const fetcheddata = await fetchData(e)
    console.log(fetcheddata)

    setResult(fetcheddata)
  }

  return (
    < >
      <CssBaseline />
      <AppBar position="relative" className={styleClass.appBar} >
        <Toolbar >
          <CloudTwoToneIcon className={styleClass.icon} />
          <Typography variant="h4" className={styleClass.title}>Weather App</Typography>
        </Toolbar>
      </AppBar>
      <Search getResult={getResult} />
      {/* <div className={styleClass.container}> */}

      <Grid container>
        <Grid item md={6}>
          <Grid item >
            <CardComponent res={res} />
          </Grid>
          <Grid item>
            <WeatherDtails res={res} />
          </Grid>
        </Grid>
        <Grid item md={6} style={{ alignSelf: "center" }}>
          <MainDetails res={res} />
        </Grid>
      </Grid>

      {/* </div> */}
    </>
  );
}

export default App;
