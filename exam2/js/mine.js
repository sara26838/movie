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
