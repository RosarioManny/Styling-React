import './App.css';
import Button1 from './components/normal-css/Button.jsx'
import Button2 from './components/inline-css/Button.jsx'
import Button3 from './components/css-in-js/Button.jsx'
import Button4 from './components/styled-components/Button.jsx'




const App = () => {
  return (
    <>
    <div className="App">
        <Button1 buttonText="Example 1" />
        <Button2 buttonText="Example 2" />
        <Button3 buttonText="Example 3" />
        <Button4 buttonText="Example 4" />
    </div>
    </>
  );
};

export default App;
