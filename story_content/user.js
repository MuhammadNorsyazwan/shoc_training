function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kQJqe96gak":
        Script1();
        break;
      case "6iuGmy8d9Io":
        Script2();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script2()
{
  var player = GetPlayer();

var thename =(
player.GetVar("name")
)

var theic =(
player.GetVar("ic")
)

var thedate =(
player.GetVar("SystemDate")
)

var urlstring = ("index.htm?print=" + thename + "&" + theic + "&" + thedate);

window.open(urlstring,"_blank","toolbar=yes,scrollbars=yes,resizable=yes,width=1200,height=700");
}

