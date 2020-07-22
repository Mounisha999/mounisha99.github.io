var xhr=new XMLHttpRequest();
xhr.open("GET","https://reqres.in/api/users");
xhr.send({});
 xhr.onreadystatechange=function(){
     if(xhr.readyState===4 && xhr.status===200)
     {
         var response=xhr.responseText;
         var display=JSON.parse(response);
        display.data.forEach(function(obj,index){ 
         var divEl=document.createElement('div');

        var imgEl=document.createElement('img');
        imgEl.setAttribute('src',obj.avatar);
        divEl.appendChild(imgEl);

        var secEl=document.querySelectorAll('section')[3];
        secEl.appendChild(divEl);  

         });
         
     }
 }