import mobileParfeum from "../assets/images/mobile.jpg";
import pcParfeum from "../assets/images/pc.jpg";
import cartSvg from "../assets/images/icon-cart.svg";

const Card = (props) => {
	return (
		<section className="mx-3 my-6 bg-white rounded-xl max-w-[375px]">
			<img src={mobileParfeum} alt="parfeum" className="rounded-t-xl" />
			<div className="p-[1.5rem]">
				<h3 className="font-montserrat tracking-[0.2rem] text-[14px] text-darkGrayishBlue">PERFUME</h3>
				<h1 className="font-fraunces text-3xl py-2">Gabrielle Essence Eau De Parfum</h1>
				<p className="font-montserrat text-[14px] font-bold text-darkGrayishBlue">
					A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of
					CHANEL.
				</p>
				<p className="text-darkCyan font-fraunces text-3xl relative my-5">
					$149.99<strike className="text-darkGrayishBlue text-xs ml-4 absolute bottom-2.5">$169.99</strike>
				</p>
				<button className="bg-darkCyan rounded-md w-full py-4 text-white font-montserrat font-bold text-sm">
					<img src={cartSvg} alt="checkout" className="inline-block mr-2" /> Add to Cart
				</button>
			</div>
		</section>
	);
};

export default Card;
