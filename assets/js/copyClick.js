function copyClick() {
	const copyText = document.getElementById("phone_num").innerHTML;
	const mockInput = document.createElement("input");
	document.body.appendChild(mockInput);
	mockInput.type = "text";
	mockInput.value = copyText;
	mockInput.style.opacity = 0;
	mockInput.style.position = "absolute";
	mockInput.style.top = "0px";
	mockInput.style.left = "0px";
	mockInput.select();
	document.execCommand("Copy");
	alert(copyText + " copied to clipboard!");
	mockInput.parentNode.removeChild(mockInput);
}
