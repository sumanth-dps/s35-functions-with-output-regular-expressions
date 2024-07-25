import React, { useEffect } from "react";
import { useRef } from "react";

function Marks() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let telInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultParaRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let emailResultRef = useRef();
  let passwordResultRef = useRef();
  let telResultRef = useRef();
  let hinResultRef = useRef();
  let engResultRef = useRef();
  let matResultRef = useRef();
  let sciResultRef = useRef();
  let socResultRef = useRef();
  let nameRegEx = /^[a-zA-Z\s]{2,30}$/;
  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
  useEffect(() => {
    alert("Welcome, Calculate your marks..😊 ");
  });
  let inputOnFocus = (
    inputRefFocus,
    bgColor = "orange",
    textColor = "white"
  ) => {
    inputRefFocus.current.style.backgroundColor = bgColor;
    inputRefFocus.current.style.color = textColor;
  };
  let inputOnchange = (inputRefChange, resultRefChange) => {
    if (
      inputRefChange.current.value >= 0 &&
      inputRefChange.current.value <= 100
    ) {
      if (inputRefChange.current.value >= 35) {
        resultRefChange.current.innerHTML = "Pass";
        resultRefChange.current.style.backgroundColor = "green";
      } else {
        resultRefChange.current.innerHTML = "Fail";
        resultRefChange.current.style.backgroundColor = "red";
      }
    } else {
      resultRefChange.current.innerHTML = "Invalid";
      resultRefChange.current.style.backgroundColor = "orange";
    }
  };
  let inputOnBlur = (inputRefBlur) => {
    inputRefBlur.current.style.backgroundColor = "";
    inputRefBlur.current.style.color = "black";
  };
  let validateName = (nameStr, resultRef) => {
    let result = nameRegEx.test(nameStr);
    if (result == true) {
      resultRef.current.innerHTML = "valid";
      resultRef.current.style.backgroundColor = "green";
    } else {
      resultRef.current.innerHTML = "Invalid";
      resultRef.current.style.backgroundColor = "red";
    }
  };
  let validateEmail = (emailStr, resultRef) => {
    let result = emailRegEx.test(emailStr);
    {
      if (result == true) {
        resultRef.current.innerHTML = "valid";
        resultRef.current.style.backgroundColor = "green";
      } else {
        resultRef.current.innerHTML = "Invalid";
        resultRef.current.style.backgroundColor = "red";
      }
    }
  };
  let validatePassword = (passwordStr, resultRef) => {
    let result = passwordRegEx.test(passwordStr);
    {
      if (result == true) {
        resultRef.current.innerHTML = "valid";
        resultRef.current.style.backgroundColor = "green";
      } else {
        resultRef.current.innerHTML = "Invalid";
        resultRef.current.style.backgroundColor = "red";
      }
    }
  };
  return (
    <div>
      <form>
        <div>
          <h4 className="title">Tenth marks calculator</h4>
          <label>First name</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              inputOnFocus(firstNameInputRef, "violet", "yellow");
            }}
            onBlur={() => {
              inputOnBlur(firstNameInputRef);
            }}
            onChange={() => {
              validateName(firstNameInputRef.current.value, firstNameResultRef);
            }}
          ></input>
          <span ref={firstNameResultRef}></span>
        </div>
        <div>
          <label>Last name</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              inputOnFocus(lastNameInputRef, "red", "white");
            }}
            onBlur={() => {
              inputOnBlur(lastNameInputRef);
            }}
            onChange={() => {
              validateName(lastNameInputRef.current.value, lastNameResultRef);
            }}
          ></input>
          <span ref={lastNameResultRef}></span>
        </div>
        <div>
          <label>Email</label>
          <input
            ref={emailInputRef}
            onFocus={() => {
              inputOnFocus(emailInputRef, "red", "white");
            }}
            onBlur={() => {
              inputOnBlur(emailInputRef);
            }}
            onChange={() => {
              validateEmail(emailInputRef.current.value, emailResultRef);
            }}
          ></input>
          <span ref={emailResultRef}></span>
        </div>
        <div>
          <label>Password</label>
          <input
            ref={passwordInputRef}
            onFocus={() => {
              inputOnFocus(passwordInputRef, "red", "white");
            }}
            onBlur={() => {
              inputOnBlur(passwordInputRef);
            }}
            onChange={() => {
              validatePassword(
                passwordInputRef.current.value,
                passwordResultRef
              );
            }}
          ></input>
          <span ref={passwordResultRef}></span>
        </div>
        <div>
          <label>Telugu</label>
          <input
            type="number"
            ref={telInputRef}
            onFocus={() => {
              inputOnFocus(telInputRef, "", "blue");
            }}
            onChange={() => {
              inputOnchange(telInputRef, telResultRef);
            }}
            onBlur={() => {
              inputOnBlur(telInputRef);
            }}
          ></input>
          <span ref={telResultRef}></span>
        </div>
        <div>
          <label>Hindi</label>
          <input
            type="number"
            ref={hinInputRef}
            onFocus={() => {
              inputOnFocus(hinInputRef, "brown");
            }}
            onChange={() => {
              inputOnchange(hinInputRef, hinResultRef);
            }}
            onBlur={() => {
              inputOnBlur(hinInputRef);
            }}
          ></input>
          <span ref={hinResultRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => {
              inputOnFocus(engInputRef);
            }}
            onChange={() => {
              inputOnchange(engInputRef, engResultRef);
            }}
            onBlur={() => {
              inputOnBlur(engInputRef);
            }}
          ></input>
          <span ref={engResultRef}></span>
        </div>

        <div>
          <label>Maths</label>
          <input
            type="number"
            ref={matInputRef}
            onFocus={() => {
              inputOnFocus(matInputRef);
            }}
            onChange={() => {
              inputOnchange(matInputRef, matResultRef);
            }}
            onBlur={() => {
              inputOnBlur(matInputRef);
            }}
          ></input>
          <span ref={matResultRef}></span>
        </div>
        <div>
          <label>Science</label>
          <input
            type="number"
            ref={sciInputRef}
            onFocus={() => {
              inputOnFocus(sciInputRef);
            }}
            onChange={() => {
              inputOnchange(sciInputRef, sciResultRef);
            }}
            onBlur={() => {
              inputOnBlur(sciInputRef);
            }}
          ></input>
          <span ref={sciResultRef}></span>
        </div>
        <div>
          <label>Social</label>
          <input
            type="number"
            ref={socInputRef}
            onFocus={() => {
              inputOnFocus(socInputRef);
            }}
            onChange={() => {
              inputOnchange(socInputRef, socResultRef);
            }}
            onBlur={() => {
              inputOnBlur(socInputRef);
            }}
          ></input>
          <span ref={socResultRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let telMarks = Number(telInputRef.current.value);
              let hinMarks = Number(hinInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let matMarks = Number(matInputRef.current.value);
              let sciMarks = Number(sciInputRef.current.value);
              let socMarks = Number(socInputRef.current.value);
              let total =
                telMarks + engMarks + hinMarks + matMarks + sciMarks + socMarks;
              let result;
              if (
                0 > engMarks ||
                engMarks > 100 ||
                0 > telMarks ||
                telMarks > 100 ||
                0 > hinMarks ||
                hinMarks > 100 ||
                0 > matMarks ||
                matMarks > 100 ||
                0 > sciMarks ||
                sciMarks > 100 ||
                0 > socMarks ||
                socMarks > 100
              ) {
                result = "Invalid";
                resultParaRef.current.innerHTML = "Please Enter Valid Marks";
              } else {
                if (
                  engMarks < 35 ||
                  telMarks < 35 ||
                  hinMarks < 35 ||
                  matMarks < 35 ||
                  sciMarks < 35 ||
                  socMarks < 35
                ) {
                  result = "Failed";
                } else {
                  result = "Passed";
                }
                alert(`Total Marks are : ${total}`);
                resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} in SSC examination and got total marks  "${total}"`;
                console.log(total);
              }
            }}
          >
            Calculate Result
          </button>
        </div>
        <p
          ref={resultParaRef}
          onMouseMove={() => {
            resultParaRef.current.style.color = "green";
          }}
        >
          Please enter values and click "Calculate"
        </p>
      </form>
    </div>
  );
}
export default Marks;
