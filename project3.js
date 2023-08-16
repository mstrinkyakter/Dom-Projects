window.onload = () => {
    main();
};

function main(){
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-btn').addEventListener('click',function(){
          const bgColor = generateHexColor();
          root.style.backgroundColor = bgColor;
          output.value = bgColor;
    });
    const copyBtn = document.getElementById('copy-btn').addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);
        generatToastMessage(`${output.value}copied`);
    });
   
};

function generateHexColor (){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};


function generatToastMessage(msg){
    const div = document.createElement ('div');
    div.innerText = msg;
    div.className = 'toast-message';
    document.body.appendChild(div);
}