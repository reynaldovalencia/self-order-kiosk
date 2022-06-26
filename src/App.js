import { Container, CssBaseline, Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseScreen from './screens/ChooseScreen';
import OrderScreen from './screens/OrderScreen';
import ReviewScreen from './screens/ReviewScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import PaymentScreen from './screens/PaymentScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';
import AdminScreen from './screens/AdminScreen';
import { useContext } from 'react';
import { Store } from './store';
import QueueScreen from './screens/QueueScreen';

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black"
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
  },
  pallete: {
    primary: { main: "#ff1744" },
    secondary: {
      main: "#118e16",
      contrastText: "#ffffff"
    }
  }
})

function App() {

  const { state } = useContext(Store);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? "lg" : "sm"}>
          <Paper>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/choose" element={<ChooseScreen />} />
              <Route path="/order" element={<OrderScreen />} />
              <Route path="/review" element={<ReviewScreen />} />
              <Route path="/select-payment" element={<SelectPaymentScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/complete" element={<CompleteOrderScreen />} />
              <Route path="/admin" element={<AdminScreen />} />
              <Route path="/queue" element={<QueueScreen />} />
            </Routes>
          </Paper>
        </Container>
      </ThemeProvider>
    </Router>


  );
}

export default App;

//Install Material Icons
//npm install @mui/icons-material

//Material Icons
//https://mui.com/material-ui/material-icons/

//Para correr servidor despues de build
//node server.js

//Instalar en Heroku
//git init



