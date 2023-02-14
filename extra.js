document.getElementById( 'number-default' ).defaultValue = '18';
const lowerCase = document.getElementById( 'text-area' ).value.toLowerCase();
function bold() {
    const element = document.getElementById( 'text-area' );
    element.classList.toggle( "font-bold" );
}
function italic() {
    const element = document.getElementById( 'text-area' );
    element.classList.toggle( "italic" );
}
function underline() {
    const element = document.getElementById( 'text-area' );
    element.classList.toggle( "underline" );
}
function textLeft() {
    const element = document.getElementById( 'text-area' ).style.textAlign = "left";
}
function textRight() {
    const element = document.getElementById( 'text-area' ).style.textAlign = "right";
}
function textCenter() {
    const element = document.getElementById( 'text-area' ).style.textAlign = "center";
}
function textJustify() {
    const element = document.getElementById( 'text-area' ).style.textAlign = "justify";
}
function numberDefault() {
    const fontValue = document.getElementById('number-default').value;
    const element = document.getElementById( 'text-area' );
    element.style.fontSize = fontValue + "px";
}
function upperCase() {
    // const lowerCase = document.getElementById( 'text-area' ).value.toLowerCase();
    const element = document.getElementById( 'text-area' );
    element.classList.toggle( "uppercase" );
    // element.classList.toggle( "uppercase" );
    // const element = document.getElementById( 'text-area' ).style.textTransform = "uppercase";
}