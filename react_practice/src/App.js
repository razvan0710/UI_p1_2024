import logo from './logo.svg';
import './App.css';
import Elements from './elements/Elements';
import NewComp from './elements/NewComp';
import StateCourse from './state_events_form/1_el';
import DateCounter from './state_events_form/2_dateCounter';

function App() {
  return (
    <div>
      <Elements/>
      <NewComp/>
      <StateCourse/>
      <DateCounter/>
    </div>
  );
}

export default App;
