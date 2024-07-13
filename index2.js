function iphone2(ASIN,color,display,camera,bluetooth){
  let obj={};
  obj.ASIN=ASIN;
  obj.color=color;
  obj.display=display;
  obj.camera=camera;
  obj.bluetooth=bluetooth;

  obj.dial=function(){

    console.log("tring..tring...");
  }

  obj.sendMessage=function(){
    console.log("sending message...");
  }

  obj.cameraClick=function(){
    console.log("Camera clicked");
  }

  obj.connectBluetooth=function(){
    console.log("Bluetooth connected suceesfully...");
  }

  return obj;
}

let i=iphone2("BH76546GHY","red","retina","50px","on");

console.log(i);
i.dial();
i.sendMessage();
i.cameraClick();
i.connectBluetooth();