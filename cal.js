 function f(val){
     document.getElementById('scr').value+=val;
   }

 function del(){
  let p;
  let v=document.getElementById("scr").value;
     p=v/10;
     val=Math.trunc(p);
     document.getElementById('scr').value=val;
      
     }
   function solve(){
     let x=document.getElementById("scr").value;
     let y=eval(x);
     document.getElementById('out').value='='+y;
   }
   function clr(){
     let e='';
     document.getElementById('scr').value=e;
       document.getElementById('out').value=e;
   }
