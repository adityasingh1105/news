import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/NavBar";
import NewsItem from "./Component/NewsItem";
import { Component } from "react";
import News from "./Component/News";
export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar />
          <News pageSize={20}
          category="sports"/>
        </div>
      </>
    );
  }
}



// export default function App() {
//   let element = useRoutes([
//     {path: '/', element: <Home />},
//     {path: '/about', element: <About />},
//   ]);

//   return element;
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }









// import "./App.css";
// import Navbar from "./Component/NavBar";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Component } from "react";
// import News from "./Component/News";
// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <div>
//           <Router>
//             <Navbar />

//             <Switch>
//             <Route path="/" element = {<News pageSize = {5} country = "in" category = "general"/>}/>
//             {/* <Route path="/buisness"><News pageSize={20} category="buisness" /></Route>
//               <Route path="/entertainment"><News pageSize={20} category="entertainment" /></Route>
//               <Route path="/general"><News pageSize={20} category="general" /></Route>
//               <Route path="/health"><News pageSize={20} category="health" /></Route>
//               <Route path="/science"><News pageSize={20} category="science" /></Route>
//               <Route path="/sports"><News pageSize={20} category="sports" /></Route> */}
//             </Switch>
//           </Router>
//         </div>
//       </>
//     );
//   }
// }
