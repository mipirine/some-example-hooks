import logo from './logo.svg';
import './App.css';
import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallBackExample from './components/UseCallBackExample';
//import CustomHookExample1 from './components/CustomHookExample1';
import CustomHookExample2 from './components/CustomHookExample2';

function App() {
  return (
    <div className="container mt-5">
        {/* <UseRefExample1 />
        <UseRefExample2 />
        <UseRefExample3 />
        <UseMemoExample />
        <UseCallBackExample /> */}
        <CustomHookExample2 />
    </div>
  );
}

export default App;
