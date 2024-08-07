import './App.css';
import Cashwithdrawal from './components/Cashwithdrawal';

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const App = () => <Cashwithdrawal denominationsList={denominationsList} />

export default App;
