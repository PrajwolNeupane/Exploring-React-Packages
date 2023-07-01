import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './Components/DragDrop';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Hello</h1>
        <DragDrop />
      </div>
    </DndProvider>
  );
};

export default App;
