const selector = document.querySelector('#user_list');
const editor = document.querySelector('#text_area');

selector.onchange = () => {
    const op = selector.options[selector.selectedIndex];

    // 面倒なのでつねに末尾に挿入する
    editor.innerHTML = `${editor.innerHTML}<span id="${op.value}" class="mention">${op.text}</span>&nbsp;`;

    // キャレットをテキストエリアの末尾に移動
    editor.focus();
    moveCaret(editor);
}

const moveCaret = (editor) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(editor.lastChild, 1);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}