function initialize(){
    //for getting an element from the boxes
    var html=document.getElementById("html");
    var css=document.getElementById("css");
    var js=document.getElementById("js");
    var code=document.getElementById("code").contentWindow.document;
    //for displaying the content immideatly on the op window
    document.body.onkeyup=function(){
        code.open();
        code.writeln(
            html.value +

            "<style>"+ css.value +"</style>" +

            "<script>" + js.value +"</script>"

        );
        code.close();
    }
    

}
initialize();