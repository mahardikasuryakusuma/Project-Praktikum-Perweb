const container = document.querySelector('.container')
const jumbo = document.querySelector('.jumbo')
const thumbs = document.querySelectorAll('.thumb')
container.addEventListener('click' , function(e) {
    if ( e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        })
        e.target.classList.add('active')
    }
});

function test(){
    var val1=document.kirim.T1.value
        val2=document.kirim.T3.value
    if (val1 == "bakso") {
        document.kirim.T2.value=  val2 * 15000}

    else if (val1 == "ayam goreng") {
        document.kirim.T2.value=  val2 * 15000}
    else if (val1 == "sushi") {
        document.kirim.T2.value=  val2 * 20000}
    else if (val1 == "milk shake") {
        document.kirim.T2.value=  val2 * 20000}
    else
    document.kirim.T2.value="Menu yang anda masukan salah"
}