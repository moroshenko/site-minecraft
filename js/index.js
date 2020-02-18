document.write("<button onclick=\"wat_the_fak()\">Jopa</button>");
document.write("<input type=\"text\" id=\"textbox\"/>");

function wat_the_fak(){
    var qi = +document.getElementById("textbox").value;
    for(var i = 0; i < qi; i++){
        document.write("Дерг за ушка<br>");
    }
}