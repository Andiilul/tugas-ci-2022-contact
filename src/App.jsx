//
import Navbar from "./components/organism/Navbar";
import Hero from "./components/organism/Hero";
import ContactBox from "./components/organism/ContactBox";
//
function App() {


	return (
		<>
    <Navbar />
    <Hero />
		<div className="h-screen bg-[rgb(102,102,102)] text-cyan text-[100px] flex justify-center text-center"> &lt;FeaturesComponent&gt;<br/>Completed Soon</div>
    <ContactBox/>
		<p>
			Will Be Full Completed Soon...
		</p>
		</>

	);
}

export default App;
