let i1 = document.getElementById("input1");
let i2 = document.getElementById("input2");
let i3 = document.getElementById("input3");
let i4 = document.getElementById("input4");
let i5 = document.getElementById("input5");
let btn1 = document.getElementById("btn_1");
let btn2 = document.getElementById("btn_2");
var temp1,temp;

function check(){
    
    temp = document.cookie;
    temp1 = temp.split("; ");
    if(temp1[3]==="LoggedIn=true")
    {
        window.location.href = "home.html";
    }
}

btn1.onclick = function btn1_onclick(e)
{
e.preventDefault();

if(i1.value==="" || i2.value==="")
{
    alert("Please Enter All Fields");
}
else
{
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(i1.value);
    if(result)
    {
        var t = i1.value.trim();
        var email = "email=" + t;
        var pass = "pass=" + i2.value;

        if(email===temp1[0] && pass===temp1[1])
        {
            document.cookie = "LoggedIn=true";
            window.location.href = "home.html";
        }
        else{
            alert("Invalid Credentials!!");
        }
    }
}
}