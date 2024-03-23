console.log('Hello World!');
function copyLink(param) {
   // Tab to edit
   navigator.clipboard.writeText(document.URL);
  let nag = document.querySelector('.nagivator')
  nag.style.bottom ='10vh'
  nag.style.opacity='1'
  
  setTimeout(()=> {
nag.style.bottom = '-10vh'
     nag.style.opacity = '0'
     
  },3000)
}