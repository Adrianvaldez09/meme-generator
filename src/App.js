import './App.css';
import './practice.css';
import Header from './Header'
import Form from './Form'
import Data from './Data'
import Practice from './Practice'
import AnotherPractice from './AnotherPractice'
import Challenge from './Challenge'

function App() {
  // !This is for boxes challenge

  console.log("App component rendered")
  
  return (
    
    <div>
      <Header/>
      <Form/>
      {/* <Practice/> */}
      {/* <AnotherPractice/> */}
      {/* <Challenge 
        darkMode={false}
      /> */}
    </div>
  );
}

export default App;
