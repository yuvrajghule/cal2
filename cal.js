 function f(val){
     if(val=='del')
     {
      var p=val/10;
      val=Math.trunc(p);}
     document.getElementById('scr').value+=val;
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
