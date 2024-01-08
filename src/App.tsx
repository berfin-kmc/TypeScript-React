import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status, StatusEnum } from './components/Status';

function App() {

  const personName = {
    first: "Andres Luis",
    last: "Gonzales Calderon"
  }

  const nameList = [
    {
      first: "Andres Luis",
      last: "Gonzales Calderon"
    },
    {
      first: "Berfin",
      last: "Altunbey"
    }
  ]

  function handleClickFn (e : React.MouseEvent<HTMLButtonElement> , id: number) {
    console.log(e.target , id)
  }

  function handleChangeFn (e : React.ChangeEvent<HTMLInputElement> , id: number) {
    console.dir(e.target.value)
  }

  return (
    <div className="App">
      <Greet name="Berfin"  isLoggedIn={true} />
      <Person person={personName} />
      <PersonList names={nameList} />
      <Status status={StatusEnum.LOADING} />
      <Header>
      <Oscar>Oscar goes to Leonardo Dicaprio!</Oscar>
      </Header>
      <Button handleClick={(e ,id) => handleClickFn(e, id)}/>
      <Input handleChange={(e ,id) => handleChangeFn(e, id)}/>
    </div>
  );
}

export default App;
