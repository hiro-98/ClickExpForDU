const CLICK_DIV_CLASS = '_25rJ9d';

setInterval(loopFunc, 1000);
var isExecuted = false;

function loopFunc() {
    let element = document.getElementsByClassName(CLICK_DIV_CLASS);

    if (element.length === 0) {
        isExecuted = false;
        return;
    }

    if (isExecuted === false) {
        element[0].outerHTML = '<label>' + element[0].outerHTML + '</label>';
        //element[0].innerHTML = '<input type="checkbox" value="on" id="agreeCheck"><label for="agreeCheck">内容を確認しました。ユーザーデカールのアップロードに進みます。</label>';
        isExecuted = true;
    }
}
