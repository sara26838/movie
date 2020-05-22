$(document).ready(function(){
    $("#searchinp").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      console.log(value)
      $(".hell").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

function defult(){

var httprequest= new XMLHttpRequest();
httprequest.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3ppiaJ_aeTdiUV6WdCOR0s4WrE7zKzLwq8eVRn4sWRfOEwtFUmDP_rLUo");
httprequest.send();
httprequest.onreadystatechange=function(){
    if(httprequest.status==200 && httprequest.readyState==4){
        var Data=JSON.parse(httprequest.response).results
        displayData(Data);
    }
}
    
}
defult();

$('.colorOption a').click(function(e){
e.preventDefault()

var asd=$(this).attr('class');
console.log(asd);

var httprequest= new XMLHttpRequest();
if(asd=='trending'){
    httprequest.open("GET","https://api.themoviedb.org/3/"+asd+"/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3ppiaJ_aeTdiUV6WdCOR0s4WrE7zKzLwq8eVRn4sWRfOEwtFUmDP_rLUo");
}else{
httprequest.open("GET","https://api.themoviedb.org/3/movie/"+asd+"?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3ppiaJ_aeTdiUV6WdCOR0s4WrE7zKzLwq8eVRn4sWRfOEwtFUmDP_rLUo");
}
httprequest.send();
httprequest.onreadystatechange=function(){
    if(httprequest.status==200 && httprequest.readyState==4){
        var Data=JSON.parse(httprequest.response).results
        displayData(Data);
    }
}
});




$(".bgg").click(function(){
    let widthbox=$(".colorOption").outerWidth();
    let leftofcolor=$(".ColorContainer").css("left");
    $(".icon2").toggleClass("fa-times")
    if(leftofcolor== '0px'){
      
        $(".ColorContainer").animate({left:`-=${widthbox}`},1000)
        $('.bgg').animate({left:'0'},1000)
       
    }
    else{
        $(".ColorContainer").animate({left:`0px`},1000)
        $("ul li").animate({padding:"10px 0 0 0",opacity:"1"},1000);
        $('.bgg').animate({left:'20%'},1000)
    }
  
})





function displayData(Data)
{
     temp = "";
            
            var titles=[];
            for(var i =0 ;i<Data.length ; i++)
                {

                    temp+= ` <div class="hell col-md-4 col-sm-6 mb-5">
                
                    <div class="item mt-5">
                        
                        <img src=https://image.tmdb.org/t/p/w500`+Data[i].poster_path+` class="img-fluid">

                        <div class="item2">
                          
                        <h3 class="">`+Data[i].title+`</h3>
                        <p>`+Data[i].overview+`</p>
                        <p>`+Data[i].vote_average+`</p>
                        <p>`+Data[i].release_date+`</p>

                        
                        </div>

                        
                       
                
                    </div>
                
                </div>`
                    titles.push(Data[i].title);
                    
                }
            
            
            document.getElementById("rowData").innerHTML = temp;
                
}
 function saveForm(){
    
    var name =document.getElementById('name');
    var email =document.getElementById('email');
    var phone =document.getElementById('phone');
    var age =document.getElementById('Age');
    var message22 =document.getElementById('message');
    var form2 =document.getElementById('myform');
    var error =document.getElementById('error')
    var error1 =document.getElementById('error1')
    var error2 =document.getElementById('error2')
    var error3 =document.getElementById('error3')
    var error4 =document.getElementById('error4')
    let message11=[]
        if(name.value===''|| name.value == null){
            message11.push("name is required")
            error.innerHTML=message11.join(',')
        }
            
         
    
         let message2 =[]
         if(email.value==='' || email.value ==null){
             message2.push('email is required')
             error1.innerHTML=message2.join(', ')
         }
    
         let message3 =[]
         if(phone.value==='' || phone.value ==null){
             message3.push('phone is required')
             error2.innerHTML=message3.join(', ')
         }
         let message44=[]
         if(age.value==='' || age.value==null ){
             message44.push('Age not valid ')
             error3.innerHTML=message44.join(', ')
         }
         if(age.value < 18){
            message44.push('Age must be greater than 18 ')
            error3.innerHTML=message44.join(', ')
         }
      
        
        let message33 =[]
        if(message22.value =='' || message22.value == null){
            message33.push('message is required')
            error4.innerHTML=message33.join(', ')
        }
        if(message22.value.length > 150){
            message33.push('Max 150 letter')
            error4.innerHTML=message33.join(', ')
         }
      alert("done")
         return false;
       
}
