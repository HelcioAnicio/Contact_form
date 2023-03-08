import './Styles/App.scss';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import Form from './Components/Form/Form';

function App() {
  return (
    <>
      <Header/>
      
      <div className="DivBr">
        <Button/>
        <Form/>
      </div>
    </>
  );
}

export default App;
