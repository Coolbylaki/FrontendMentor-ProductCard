import mobileParfeum from "../assets/images/mobile.jpg";
import pcParfeum from "../assets/images/pc.jpg";
import cartSvg from "../assets/images/icon-cart.svg";
import { useEffect, useState } from "react";

const Card = () => {
	const [parfeumImg, setParfeumImg] = useState();

	useEffect(() => {
		if (window.screen.width > 768) {
			setParfeumImg(pcParfeum);
		} else {
			setParfeumImg(mobileParfeum);
		}
	}, []);

	return (
		<section className="mx-3 my-6 rounded-xl mob:max-w-[375px] md:flex md:m-0 md:w-[640px] md:h-[470px]">
			<img src={parfeumImg} alt="parfeum" className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none" />
			<div className="p-[1.5rem] bg-white md:rounded-r-xl md:p-8">
				<h3 className="font-montserrat tracking-[0.2rem] text-[14px] text-darkGrayishBlue">PERFUME</h3>
				<h1 className="font-fraunces text-3xl py-2 text-veryDarkBlue md:my-5">Gabrielle Essence Eau De Parfum</h1>
				<p className="font-montserrat text-[14px] font-bold text-darkGrayishBlue">
					A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of
					CHANEL.
				</p>
				<p className="text-darkCyan font-fraunces text-3xl relative my-5 md:mb-8">
					$149.99<strike className="text-darkGrayishBlue text-xs ml-4 absolute bottom-2.5">$169.99</strike>
				</p>
				<button className="bg-darkCyan rounded-md w-full py-4 text-white font-montserrat font-bold text-sm hover:bg-green-900">
					<img src={cartSvg} alt="checkout" className="inline-block mr-2" /> Add to Cart
				</button>
			</div>
		</section>
	);
};

export default Card;
