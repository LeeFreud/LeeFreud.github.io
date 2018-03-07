var header = document.getElementById("0");
var current = document.getElementById("10");
var selection = document.getElementById("11");
var article = document.getElementById("2");
var s_0 =       "<a onclick=\"l_0()\" href=\"javascript:void(0);\">home</a>";
var s_0_0 =     "<a onclick=\"l_0_0()\" href=\"javascript:void(0);\">りゅうおうのおしごと</a>";
var s_0_0_0 =   "<a onclick=\"l_0_0_0()\" href=\"javascript:void(0);\">ep01</a>";
var s_0_0_0_0 = "<a onclick=\"l_0_0_0_0()\" href=\"javascript:void(0);\">sub.txt</a>";


function l_0()
{
    header.innerHTML = "<h1>hello world. </h1>";
    current.innerHTML = "current: " + s_0 + "/ ";
    selection.innerHTML = "selection: " + s_0_0 ;
    article.innerHTML = "";
}

function l_0_0()
{
    current.innerHTML = "current: " + s_0 + "/ " + s_0_0 + "/ ";
    selection.innerHTML = "selection: " + s_0_0_0;
    article.innerHTML = "";
}
function l_0_0_0()
{
    current.innerHTML = "current: " + s_0 + "/ " + s_0_0 + "/ " + s_0_0_0 + "/ ";
    selection.innerHTML = "selection: " + s_0_0_0_0;
    article.innerHTML = "";
}
function l_0_0_0_0()
{
    current.innerHTML = "current: " + s_0 + "/ " + s_0_0 + "/ " + s_0_0_0 + "/ " + s_0_0_0_0;
    selection.innerHTML = "selection: ";
    article.innerHTML = ep01();
}




l_0();