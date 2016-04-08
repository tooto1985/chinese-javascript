(function(dc) {
    function runnable(id) {
        var code = id.innerText;
        for (var a in dc) {
            code = code.replace(new RegExp("((?!\"|\')" + a + "(?!\"|\'))", "g"), dc[a]);
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerText = code;
        return script;
    }
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    document.addEventListener("DOMContentLoaded", function() {
        var script = document.getElementsByTagName("script");
        for (var i = 0; i < script.length; i++) {
            if (script[i].type === "text/translate") {
                insertAfter(runnable(script[i]),script[i]);
            }
        }
    }, false);
})({
"不":"!",
"對話框": "alert",
"跳出":"break",
"條件":"case",
"捕捉":"catch",
"繼續":"continue",
"預設":"default",
"刪除":"delete",
"做":"do",
"文件":"document",
"其他":"else",
"最後":"finally",
"迴圈":"for",
"函數":"function",
"如果":"if",
"包含":"in",
"為有限":"isFinite",
"為非數值":"isNaN",
"實例於":"instanceof",
"鍵盤放開":"keyup",
"實例":"new",
"回傳":"return",
"判斷":"switch",
"本身":"this",
"擲回":"throw",
"嘗試":"try",
"型別於":"typeof",
"宣告":"var",
"值":"val",
"當":"while"
})