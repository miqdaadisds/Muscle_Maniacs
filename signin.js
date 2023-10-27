    let i1 = document.getElementById("input1");
    let i2 = document.getElementById("input2");
    let i3 = document.getElementById("input3");
    let i4 = document.getElementById("input4");
    let i5 = document.getElementById("input5");
    let btn1 = document.getElementById("btn_1");
    let btn2 = document.getElementById("btn_2");

    btn2.onclick = function btn2_onclick(a)
{
    a.preventDefault();
    if(i3.value==="" || i4.value==="" || i5==="")
    {

        alert("Please Enter All Fields");
    }
                    
    else
    {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(i3.value);
    if(result)
    {
        if(i4.value===i5.value){
            var t = i3.value.trim();
            document.cookie = "email=" + t;
            document.cookie = "pass="  + i5.value;
            document.cookie = "expires=Fri,5 Aug 2025 01:00:00 UTC";
            document.cookie = "LoggedIn=false";
            window.location.href = "index.html";
        }
        else{
            alert("Password dont match!");
            i4.focus();
            i4.select();
        }
    }
    else
    {
    alert("Please Enter Valid Email Address!");
    i3.focus();
    i3.select();
    }
}
}