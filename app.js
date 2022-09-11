const rangeInput = document.querySelector('input[type="range"]');
const billing = document.querySelector('input[type="checkbox"]');
const price = document.querySelector(".price");
const amount = document.querySelector(".amount");
const discountText = document.querySelector(".discount");
const pageviewsArr = ["10K", "50K", "100K", "500K", "1M"];
const priceArr = ["8", "12", "16", "24", "36"];
let discount = false;

const setDiscount = () => {
	discount = !discount;
	setPrice(rangeInput.value);
};

const setPrice = (value) => {
	if (!discount) {
		price.textContent = `$${priceArr[value - 1]}.00`;
	} else {
		const discountPrice = priceArr[value - 1] * 0.75;
		price.textContent = `$${discountPrice.toString()}.00`;
	}
};

const handleInputChange = (e) => {
	let target = e.target;
	const min = target.min;
	const max = target.max;
	const val = target.value;
	amount.textContent = `${pageviewsArr[val - 1]} pageviews`;
	setPrice(val);
	target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
};

const setDiscountText = () => {
	const width = window.innerWidth;
	if (width > 1025) {
		discountText.textContent = "25% discount";
	} else discountText.textContent = "-25%";
};

setDiscountText();

rangeInput.addEventListener("input", handleInputChange);
billing.addEventListener("input", setDiscount);
window.onresize = setDiscountText;
