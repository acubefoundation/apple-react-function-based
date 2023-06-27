import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import React from "react";
import "./bootstrap.css";
import "./Style.css";

// Home page
import Main from './mainPrent4H$F/main'
import Footer from "./Components/Footer/Footer";

// Pages
import Iphone from "./Components/Pages/Iphone/iphone";
import Mac from "./Components/Pages/Mac/Mac";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Music from "./Components/Pages/Music/Music";
import Cart from "./Components/Pages/Cart/Cart";
import Support from "./Components/Pages/Support/Support";
import TV from "./Components/Pages/TV/TV";
import Watch from "./Components/Pages/Watch/Watch";
import Four04 from "./Components/Pages/Four04/Four04";
import Productpage from "./Components/Pages/Productpage/Productpage";
import TestFirst from "./Components/First/testFirst";
import HeaderAndFooter from "./mainPrent4H$F/headerAndFooter"


function App() {
	return (
		<BrowserRouter>
		<Routes>
			
			
				 {/* <Nav /> */}
			<Route path="/" exact element={<HeaderAndFooter />} >
				<Route path="/" exact element={<Main />} />
				
				<Route path="/testfirst" exact element={<TestFirst />} />
				<Route path="/iphone" exact element={<Iphone />} />
				<Route path="/ipad" exact element={<Ipad />} />
				<Route path="/TV" exact element={<TV />} />
				<Route path="/Watch" exact element={<Watch />} />
				<Route path="/Music" exact element={<Music/>} />
				<Route path="/Support" exact element={<Support />} />
				<Route path="/Cart" exact element={<Cart />} />
				<Route path="/mac" exact element={<Mac />} />
				<Route path="/iphone/:pid" exact element={<Productpage />} />
				<Route path="*" element={<Four04 />} /> 

			</Route>
				{/* <Switch> */}
					
				{/* </Switch>  */}
				{/* <Footer />  */}
			
		</Routes>
		</BrowserRouter>
	);
}

export default App;
