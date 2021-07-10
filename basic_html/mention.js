const selector = document.querySelector('#user_list');
const editor = document.querySelector('#text_area');

selector.onchange = () => {
    const name = selector.options[selector.selectedIndex].text;
    
    // 面倒なのでつねに末尾に挿入する
    editor.innerHTML = editor.innerHTML + name;
}