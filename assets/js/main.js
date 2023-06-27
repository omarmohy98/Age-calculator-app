let inputsFeilds = document.querySelectorAll(".input");
let calBtn = document.querySelector(".cal-btn");
let resultEle = document.querySelectorAll(".result span");

// check if day is a valid day
function checkDay() {
  let day =
    inputsFeilds[0].value.trim()[0] === "0"
      ? Number(inputsFeilds[0].value.trim()[1])
      : Number(inputsFeilds[0].value.trim());
  let month =
    inputsFeilds[1].value.trim()[0] === "0"
      ? Number(inputsFeilds[1].value.trim()[1])
      : Number(inputsFeilds[1].value.trim());
  let months = [1, 3, 5, 7, 8, 10, 12];
  if (day === 0) {
    inputsFeilds[0].nextElementSibling.style.display = "block";
    inputsFeilds[0].nextElementSibling.innerHTML = "This field is required";
  } else if (month === 2) {
    if (day <= 28) {
      inputsFeilds[0].nextElementSibling.style.display = "none";
      return day;
    } else {
      inputsFeilds[0].nextElementSibling.style.display = "block";
      inputsFeilds[0].nextElementSibling.innerHTML = "Must be a valid day";
    }
  } else if (months.includes(month)) {
    if (day <= 31) {
      inputsFeilds[0].nextElementSibling.style.display = "none";
      return day;
    } else {
      inputsFeilds[0].nextElementSibling.style.display = "block";
      inputsFeilds[0].nextElementSibling.innerHTML = "Must be a valid day";
    }
  } else {
    if (day <= 30) {
      inputsFeilds[0].nextElementSibling.style.display = "none";
      return day;
    } else {
      inputsFeilds[0].nextElementSibling.style.display = "block";
      inputsFeilds[0].nextElementSibling.innerHTML = "Must be a valid day";
    }
  }
}

// check if month is a valid month
function checkMonth() {
  let month =
    inputsFeilds[1].value.trim()[0] === "0"
      ? Number(inputsFeilds[1].value.trim()[1])
      : Number(inputsFeilds[1].value.trim());
  if (month === 0) {
    inputsFeilds[1].nextElementSibling.style.display = "block";
    inputsFeilds[1].nextElementSibling.innerHTML = "This field is required";
  } else if (month <= 12) {
    inputsFeilds[1].nextElementSibling.style.display = "none";
    return month;
  } else {
    inputsFeilds[1].nextElementSibling.style.display = "block";
    inputsFeilds[1].nextElementSibling.innerHTML = "Must be a valid month";
  }
}

// check if year is valid
function checkYear() {
  let year = Number(inputsFeilds[2].value.trim());
  if (year === 0) {
    inputsFeilds[2].nextElementSibling.style.display = "block";
    inputsFeilds[2].nextElementSibling.innerHTML = "This field is required";
  } else if (year > new Date().getFullYear()) {
    inputsFeilds[2].nextElementSibling.style.display = "block";
    inputsFeilds[2].nextElementSibling.innerHTML = "Must be in the past";
  } else {
    inputsFeilds[2].nextElementSibling.style.display = "none";
    return year;
  }
}

// Cal Age
function calAge() {
  let day = checkDay();
  let month = checkMonth();
  let year = checkYear();
  let dateNow = new Date();
  if (day !== undefined && month !== undefined && year !== undefined) {
    let y = dateNow.getFullYear() - year;
    let m = dateNow.getMonth() + 1 - month;
    let d = dateNow.getDate() - day;
    resultEle[0].innerHTML = y;
    resultEle[1].innerHTML = m;
    resultEle[2].innerHTML = d;
  }
}

inputsFeilds[0].addEventListener("blur", checkDay);
inputsFeilds[1].addEventListener("blur", checkMonth);
inputsFeilds[1].addEventListener("blur", checkDay);
inputsFeilds[2].addEventListener("blur", checkYear);
inputsFeilds[0].addEventListener("input", checkDay);
inputsFeilds[1].addEventListener("input", checkMonth);
inputsFeilds[1].addEventListener("input", checkDay);
inputsFeilds[2].addEventListener("input", checkYear);
calBtn.addEventListener("click", checkDay);
calBtn.addEventListener("click", checkMonth);
calBtn.addEventListener("click", checkYear);
calBtn.addEventListener("click", calAge);
