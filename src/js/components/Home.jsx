import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from './Header.jsx'
import Jumbotron from './Jumbotron.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<Header />
			<Jumbotron />
			<div className="row mx-5 justify-content-between gap-4 my-5">
				<Card
					img={"https://picsum.photos/id/100/500/325"}
					tit={"1.- Special title treatment"}
					parrafo={"1.- With supporting text below as a natural lead-in to additional content."}
					btn={"Presione Primer Boton"}
				/>
				<Card
					img={"https://picsum.photos/id/101/500/325"}
					tit={"2.- Special title treatment"}
					parrafo={"2.- With supporting text below as a natural lead-in to additional content."}
					btn={"Presione Segundo Boton"}
				/>
				<Card
					img={"https://picsum.photos/id/102/500/325"}
					tit={"3.- Special title treatment"}
					parrafo={"3.- With supporting text below as a natural lead-in to additional content."}
					btn={"Presione Tercero Boton"}
				/>
				<Card
					img={"https://picsum.photos/id/103/500/325"}
					tit={"4.- Special title treatment"}
					parrafo={"4.- With supporting text below as a natural lead-in to additional content."}
					btn={"Presione Cuarto Boton"}
				/>
			</div>
			<Footer />
		</div>
	);
};


export default Home;