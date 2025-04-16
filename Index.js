//1
function jambscore(score){
if (score >= 180) {
    console.log("pass");
} else {
    console.log("fail");
}
}

//2
function agechecker(age) {

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("Not eligible");
}
}

//3

function scoreChecker(score) {
    if (score < 0 || score > 100) return "invalid score";
    if (score >= 90) return "excellent";
    if (score >= 75) return "good";
    if (score >= 50) return "average";
    return "fail";
}


//4

function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

//5
 function scoreChecker(score){
    if (score > 50) {
        return "pass";
    } else {
        return "fail";
    }
}

//6
const studentscore = (math,english) => {
if (math >= 50 && english >= 50) {
    console.log("yes");
} else {
    console.log("no");
}
}


//7
const user = (an email,phone number) => {

if (user === "an email" || user === "phone number") {
    console.log("sign up");
} else {
    console.log("try again next time");
}
}


//8 

const passkey= (username,password)=>{
  if (passkey==="username" && passkey==="password"){
    console.log("login");
  }else{
    console.log("invalid imput");
  }
}
//9
function timechecker (timer);
console.log(timer >= 40 ? "fulltime" : "parttime");

//10

const largerNumber = (a, b) => {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "none"; 
    }
}

