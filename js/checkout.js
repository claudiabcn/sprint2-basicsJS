 const validate = () => {
	  const namePattern = /^[A-Za-z]+$/;

      const fName = document.getElementById("fName");
	  const errorName = document.getElementById("errorName");
      const nameValue = fName.value.trim();
      fName.classList.remove("is-invalid");
      errorName.style.display = "none";

	  const fLastN= document.getElementById("fLastN");
	  const errorLastN = document.getElementById("errorLastN");
	  const lastNValue = fLastN.value.trim();
	  fLastN.classList.remove("is-invalid");
	  errorLastN.style.display = "none";

	  let isValid = true;
	  
      if (nameValue === "" || nameValue.length < 3 || !namePattern.test(nameValue)) {
        fName.classList.add("is-invalid");
        errorName.style.display = "block";
        isValid = false;
      }
	  if (lastNValue === "" || lastNValue.length < 3 || !namePattern.test(lastNValue)) {
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "block";
		isValid = false;
	  }

      return isValid;
    };