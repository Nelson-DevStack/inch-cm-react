import { useReducer } from 'react';
import './App.css'
import Card from './components/Card';

type ReducerState = {
  count: number,
  showText: boolean
}

enum Actions{
  INCREMENT = "INCREMENT",
  toggleShowText = "toggleShowText",
}

type ReducerAction = {
  type: Actions
}

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch(action.type){
    case Actions.INCREMENT:
      return { count: state.count + 1, showText: state.showText };
    case Actions.toggleShowText:
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="App">
      <div className="Container">
        <Card />
      </div>
    </div>
  )
}

export default App
