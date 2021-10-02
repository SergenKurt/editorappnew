/**
 * Set Html Editor
 **/
let htmlEditor = ace.edit("html");

htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setTheme("ace/theme/nord_dark");
htmlEditor.session.setUseWrapMode(true);
htmlEditor.setShowPrintMargin(false);
htmlEditor.setHighlightActiveLine(false);

/**
 * Set Css Editor
 **/

let cssEditor = ace.edit("css");

cssEditor.session.setMode("ace/mode/css");
cssEditor.setTheme("ace/theme/nord_dark");
cssEditor.session.setUseWrapMode(true);
cssEditor.setShowPrintMargin(false);
cssEditor.setHighlightActiveLine(false);


/**
 * Set Js Editor
 **/

let jsEditor = ace.edit("javascript");

jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setTheme("ace/theme/nord_dark");
jsEditor.session.setUseWrapMode(true);
jsEditor.setShowPrintMargin(false);
jsEditor.setHighlightActiveLine(false);

// Set Default Value
if (localStorage.getItem("ins_last_template") == null){

    htmlEditor.session.setValue(`<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`);

    cssEditor.session.setValue(`body{ background: #FFFFFF; }`);
    jsEditor.session.setValue(`//JavaScript goes here`);
}


