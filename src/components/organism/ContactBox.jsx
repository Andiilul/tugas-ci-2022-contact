import ContactInput from "../molecules/ContactInput";
import ContactCard from "../molecules/ContactCard";
import { useState } from "react";
import { nanoid } from "nanoid";

const ContactBox = () => {
	const [contacts, setContacts] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	const handleShow = () => {
		setIsVisible(!isVisible);
		console.log(isVisible);
	};

	const handleDeleteContact = (id) => {
		const updatedContacts = contacts.filter(
			(contact) => contact.uniqueId !== id
		);
		setContacts(updatedContacts);
	};

	const handleAddContact = (newContact) => {
		const newContactWithUniqueId = { ...newContact, uniqueId: nanoid() };
		setContacts([...contacts, newContactWithUniqueId]);
	};

	return (
		<div id="contactBox" className="bg-dark p-10">
      <h1 className="flex justify-center text-[100px] text-cyan">ADD CONTACT DEMO</h1>
			<div className="bg-dark flex justify-center ">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{contacts.slice().sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)) //Mengurutkan 
						.map((contact) => (
							<ContactCard
								key={contact.uniqueId}
								name={contact.name}
								number={contact.number}
								email={contact.email}
								uniqueId={contact.uniqueId}
								onDelete={handleDeleteContact}
							/>
						))}
					<ContactInput
						onAddContact={handleAddContact}
						isVisible={isVisible}
						handleShow={handleShow}
            
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactBox;
