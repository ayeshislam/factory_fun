function iphone1(ASIN,color,display,camera){
  let obj={};
  obj.ASIN=ASIN;
  obj.color=color;
  obj.display=display;
  obj.camera=camera;

  obj.dial=function(){

    console.log("tring..tring...");
  }

  obj.sendMessage=function(){
    console.log("sending message...");
  }

  obj.cameraClick=function(){
    console.log("Camera clicked");
  }

  return obj;
}

let i=iphone1("BH76546GHY","red","retina","50px");

console.log(i);
i.dial();
i.sendMessage();
i.cameraClick();