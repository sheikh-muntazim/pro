import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Arr from './Components/Arr';
import Project from './Components/Project';
import Mui from './Components/MaterialUI';
import FirstCall from './Api';
import ApiCall from './Components/ApiCall';
import LoginForm from './Components/Login';
import Counter from './Components/Counter';
import Parent from './pureComponent/Parent';
import Carousel from './Components/Carousel';
import SignIn from './figma/SignIn';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import NavBar from './figma/NavBar';
import HomePage from './figma/HomePage';
import Card from './figma/Card';

function App() {

  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <Project/> */}
      {/* <Form/> */}
      {/* <Arr/> */}
      {/* <Mui/>  */}
      {/* <FirstCall/> */}
      {/* <ApiCall/> */}
      {/* <LoginForm/> */}
      {/* <Counter/> */}
      {/* <Parent/> */}

      {/* <Carousel/> */}
      
      {/* <SignIn/> */}

      <NavBar/>

      <HomePage/> 
      {/* <Card/> */}

      
    </div>
    </ThemeProvider>
  );
}

export default App;
