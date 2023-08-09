import PropTypes from "prop-types";
import { useState } from "react";
import { BsPersonPlusFill } from "react-icons/bs";

const ContactInput = (props) => {
	const { onAddContact } = props;
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [showAddButton, setShowAddButton] = useState(false)

	const handleAddContact = () => {
		if (name.trim() !== "" && number.trim() !== "" && email.trim() !== "") {
			onAddContact({ name, number, email });
			setName("");
			setNumber("");
			setEmail("");
			toggleAddContact()
		}
	};

	const addCardVisible = showAddButton? "flex":"hidden"
	const hideToggle = !showAddButton?"flex":"hidden"
	const toggleAddContact = ()=>{
		setShowAddButton(!showAddButton)
	}

	return (
		<main className="h-[200px] w-[400px] border-cyan border-[2px] rounded-lg flex overflow-hidden drop-shadow-[-1px_3px_3px_rgba(0,0,0,0.8)]">
			<section onClick={toggleAddContact} className={`${hideToggle} flex-col justify-center items-center hover:scale-[110%] w-full h-full cursor-pointer select-none hover:bg-[rgba(97,220,251,0.1)] hover:duration-[400ms] ease-in-out duration-[400ms]`}>
				<div>
					<div className="h-[80px] flex justify-center items-center text-cyan text-[50px] aspect-square">
						<BsPersonPlusFill />
					</div>
				</div>
				<div className="text-cyan text-[30px]">Add Contact +</div>
			</section>
			<section className={`${addCardVisible} w-full h-full flex-col justify-center items-center p-[12px_32px] gap-2`}>
				<div className="flex flex-col gap-2 w-full">
					<input
						className="w-full bg-transparent p-[5px_10px] border-[1px] border-cyan rounded-[20px] outline-none text-cyan"
						onChange={(e) => setName(e.target.value)}
						value={name}
						placeholder="Name"
					></input>
					<input
						className="w-full bg-transparent p-[5px_10px] border-[1px] border-cyan rounded-[20px] outline-none text-cyan"
						onChange={(e) => setNumber(e.target.value)}
						value={number}
						placeholder="Number"
					></input>
					<input
						className="w-full bg-transparent p-[5px_10px] border-[1px] border-cyan rounded-[20px] outline-none text-cyan"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						placeholder="Email"
					></input>
				</div>
				<div className="flex gap-10">
					<button
						onClick={handleAddContact}
						className="hover:bg-[rgba(65,255,100,0.8)] hover:text-dark border-[1px] border-cyan text-cyan p-[6px_18px] rounded-[20px] duration-300 hover:duration-300"
					>
						Submit
					</button>
					<button onClick={toggleAddContact} className="hover:bg-[rgba(255,63,63,0.8)] hover:text-dark border-[1px] border-cyan text-cyan p-[6px_18px] rounded-[20px] duration-300 hover:duration-300">
						Cancel
					</button>
				</div>
			</section>
		</main>
	);
};

ContactInput.propTypes = {
	onAddContact: PropTypes.func.isRequired,
	isVisible: PropTypes.bool.isRequireds,
	handleShow: PropTypes.func.isRequired,
};

export default ContactInput;
