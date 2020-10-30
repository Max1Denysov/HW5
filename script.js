lights = ['red', 'red-amber', 'green', 'amber','red2'];
counter = 0
$("#button").click(function(){

  if(lights[counter]=="red"){
    $("#redlight").fadeIn(400)
  counter++
  }else if(lights[counter]=="red-amber"){
    $("#amberlight").fadeIn(400)
    counter++
  } else if(lights[counter]=='green'){
    $('#greenlight').fadeIn(400)
 $("#amberlight").fadeOut(400)
 $("#redlight").fadeOut(400)
    counter++
  }
  else if(lights[counter]=='amber'){
    $('#amberlight').fadeIn(400)
 $("#greenlight").fadeOut(400)
    counter++
  } else {
    $('#redlight').fadeIn(400)
    $("#amberlight").fadeOut(400)
    counter = 0  
  }
  
});