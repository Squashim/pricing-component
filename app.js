const rangeInput = document.querySelector('input[type="range"]');
const pageViews = document.querySelector;

const handleInputChange = (e) => {
	let target = e.target;

	const min = target.min;
	const max = target.max;
	const val = target.value;

	target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
};

rangeInput.addEventListener("input", handleInputChange);
