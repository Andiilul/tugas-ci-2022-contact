import PropTypes from "prop-types";
import {
	BsTrash,
	BsChatLeftTextFill,
	BsFillPersonFill,
	BsTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {AiOutlineDoubleRight} from "react-icons/ai"
import reactBg2 from "../../assets/CardBg2.jpg"
import reactBg from "../../assets/CardBg.jpg"

const ContactCard = (props) => {
	const { name, number, email, uniqueId, onDelete } = props;

	const handleDelete = () => {
		onDelete(uniqueId);
	};

	const handleSendEmail = () => {
		window.location.href = `mailto:${email}?`;
	};

	const cardDesc = "text-[14px] text-dark line-clamp-1 ";
	const tableRowCls = "align-top flex gap-3 ";
	const iconsCls = "text-[18px] align-top text-dark";

  const actionButton ="rounded-[50%] border-solid border-cyan text-cyan border-[2px] h-[40px] justify-center items-center flex aspect-square hover:bg-[rgba(97,219,251,0.3)] hover:duration-[300ms] duration-[300ms] ease-in hover:ease-out"
	const imagesBackground = {
		backgroundImage: `url(${reactBg2})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
  const profileImages = {
		backgroundImage: `url(${reactBg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<main className="drop-shadow-[-1px_3px_3px_rgba(0,0,0,0.6)] flex flex-col rounded-lg overflow-hidden h-[200px] w-[400px] animate-leftAppear">
			<section className="h-[35%]" style={imagesBackground}>
        <div className="h-full w-full bg-[rgba(0,0,0,0.5)] justify-end items-center flex pr-5">
          <button onClick={handleDelete} title="Delete" className={`${actionButton} text-[20px] font-bold`}><BsTrash/></button>
        </div>
      </section>
			<section className="flex bg-dark grow">
				<aside className="grow relative border-t-[2px] border-white flex justify-center">
          <div title={`${name}'s Profile Picture`} className="absolute -top-[41px] bg-white border-solid border-cyan border-[2px] aspect-square rounded-[50%] w-[80px]" style={profileImages}>
          </div>
          <div className="w-full items-center flex justify-between p-[0_10px] mt-[40px]">
            <button className={actionButton} title="Call (Dummy Button)"><BsTelephoneFill/></button>
            <button className={actionButton} title="Send Email" onClick={handleSendEmail}><BsChatLeftTextFill/></button>
          </div>
        </aside>
				<aside className="w-[72%] bg-cyan flex justify-between gap-4 border-t-[2px] border-white border-solid">
					<section className="pl-4 flex justify-center items-center">
						<table className="w-full flex flex-col gap-[12px] "style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)' }}>
							<tr className={tableRowCls}>
								<td className={iconsCls}>
									<BsFillPersonFill />
								</td>
								<td title={name} className={cardDesc}>
									{name}
								</td>
							</tr>
							<tr className={tableRowCls}>
								<td className={iconsCls}>
									<BsTelephoneFill />
								</td>
								<td title={number} className={cardDesc}>
									{number}
								</td>
							</tr>
							<tr className={tableRowCls}>
								<td className={iconsCls}>
									<MdEmail />
								</td>
								<td title={email} className={cardDesc}>
									{email}
								</td>
							</tr>
						</table>
					</section>
          <button title="Detail (Dummy Button)" className="justify-self-end bg-gradient-to-l from-[rgba(0,0,0,0.23)] to-transparent p-2 text-white hover:from-transparent hover:bg-[rgba(12,12,12,0.3)] duration-[400ms] hover:duration-[400ms]">
            <AiOutlineDoubleRight title="Detail"/>
          </button>
				</aside>
			</section>
		</main>
	);
};

ContactCard.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	uniqueId: PropTypes.string,
	onDelete: PropTypes.func,
};

export default ContactCard;
