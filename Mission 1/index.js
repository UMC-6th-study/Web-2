
function checkPasswordMatch() { 
    const password = document.getElementById("password").value; 
    const confirmPassword = document.getElementById("confirmPassword").value; 
    const confirmPasswordError = document.getElementById("confirmPasswordError"); 
    confirmPasswordError.classList.add("error");

    if (password !== confirmPassword) { 
        confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다."; 
        confirmPasswordError.style.color = "red"; 
        document.getElementById("submitBtn").disabled = true; 
        return false; 
    } else { 
        confirmPasswordError.textContent = ""; 
        document.getElementById("submitBtn").disabled = false; 
        return true; 
    }
}

function checkEmailInput() {
    const email = document.getElementById("email").value; 
    const emailError = document.getElementById("emailError"); 
    emailError.classList.add("error");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (emailRegex.test(email)) { 
        emailError.textContent = "올바른 이메일 형식입니다.";
        emailError.style.color = "green"; 
        return true; 
    } else {
        emailError.textContent = "올바른 이메일 형식이 아닙니다!"; 
    return false; 
    }
}


function checkNameInput() {
    const name = document.getElementById("name").value; 
    const nameError = document.getElementById("nameError"); 
    nameError.classList.add("error");
    const nameMessage = document.getElementById("nameMessage"); 

    if (name === "") { 
        nameError.textContent = "필수 입력 항목입니다!"; 
        nameError.style.color = "red"; 
        nameMessage.textContent = ""; 
        return false; 
    } else { 
        nameError.textContent = ""; 
        nameMessage.textContent = "멋진 이름이네요!"; 
        nameMessage.style.color = "green"; 
        return true; 
    }
}

function checkAgeInput() { 
    const age = document.getElementById("age").value; 
    const ageError = document.getElementById("ageError");
    ageError.classList.add("error");

    if (age === "") { 
        ageError.textContent = "필수 입력 항목입니다!"; 
        ageError.style.color ="red";
    } else if (age < 19) { 
        ageError.textContent = "19세 이상만 가입이 가능합니다."; 
       
    } else { 
        ageError.textContent = "올바른 나이 형식입니다."; 
        ageError.style.color = "green"; 
        
    }
}

document.getElementById("signupForm").addEventListener("submit", function(event) { 
    const isNameValid = checkNameInput(); 
    const isAgeValid = checkAgeInput();
    const isEmailValid = checkEmailInput();
    const isPasswordMatched = checkPasswordMatch(); 
});
