import HelloWorld from "./components/HelloWorld"
import GoodBye from "./components/GoodBye"
import Book from "./components/Book"
import Song from "./components/Song"
import Length from "./components/lenght"
import Quot from "./components/Quot"
import UpperCase from "./components/UpperCase"
import LowerCase from "./components/LowerCase"
import Link from "./components/Link"
import Round from "./components/Round"
import Power from "./components/Power"
import List from "./components/List"
import Random from "./components/Random"
import Sum from "./components/Sum"




function App() {
    return ( 
    <div className = "App">
        <HelloWorld />
     <GoodBye />
     <Book title="Dark Tower" author="Stephen King" /> 
     <Song title="Perfect" author="Ed Sheran" genre="Pop" /> 
     <Song title="8 mile" author="Eminem" genre="Rap" /> 
     <Length text="Example string" />
     <Quot author="Putin">I love <strong>Kyrgyzstan</strong></Quot>
     <UpperCase>example string</UpperCase>
     <LowerCase>EXAMPLE STRING</LowerCase>
     <Link to="https://www.google.com/">GOOGLE</Link>
     <Round number={12.} />
     <Power number={5} to={2}/>
     <List items={['Apple', 'Kiwi']} />
     <Random min={5} max={10} /> 
     <Sum a={5} b={7} />
        </div>
   
    );
  
};

export default App;