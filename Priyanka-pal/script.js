for(let i=0; i<30; i++){
 let s=document.createElement('div');
 s.style.position='fixed';
 s.style.width='3px';
 s.style.height='3px';
 s.style.background='gold';
 s.style.borderRadius='50%';
 s.style.left=Math.random()*100+'vw';
 s.style.top='100vh';
 s.style.boxShadow='0 0 6px gold';
 s.style.zIndex='999';
 document.body.appendChild(s);

 let speed = 0.3 + Math.random()*0.7; // slow speed
 function udna(){
   let top = parseFloat(s.style.top);
   if(top < -10){
     s.style.top = '100vh';
     s.style.left = Math.random()*100+'vw';
   } else {
     s.style.top = (top - speed) + 'px';
   }
   requestAnimationFrame(udna);
 }
 udna();
}