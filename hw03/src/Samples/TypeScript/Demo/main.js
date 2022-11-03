// document.querySelector('.Sliders').addEventListener('change', e => {
//   setParam(e,false);
// });

// document.querySelector('.Slider2').addEventListener('change', e => {
//   setParam(e,false);
// });

// document.querySelector('.Slide3').addEventListener('change', e => {
//   setParam(e,true);
// });


// function setParam(event,isSpecifyParam){
//   let val = parseFloat(event.target.value);
//   let id = event.target.id;
//   runModel(view => {
//     //先傳到lapp delegate的view的參數
//     //綁定參數
//     if (id === 'ParamAngleX') view.angleX = val;
//     if (id === 'ParamAngleY') view.angleY = val;
//     if (id === 'ParamAngleZ') view.angleZ = val;
//     if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
//     if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
//     if (id === 'ParamEyeROpen') view.eyeROpen = val;
//     if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
//     if (id === 'ParamEyeBallX') view.eyeBallX = val;
//     if (id === 'ParamEyeBallY') view.eyeBallY = val;
//     if (id === 'ParamEyeBallForm') view.eyeBallForm = val;
//     if (id === 'ParamBrowLY') view.browLY = val;
//     if (id === 'ParamBrowRY') view.browRY = val;
//     if (id === 'ParamBrowLX') view.browLX = val;
//     if (id === 'ParamBrowRX') view.browRX = val;
//     if (id === 'ParamBrowLAngle') view.browLAngle = val;
//     if (id === 'ParamBrowRAngle') view.browRAngle = val;
//     if (id === 'ParamBrowLForm') view.browLForm = val;
//     if (id === 'ParamBrowRForm') view.browRForm = val;
//     //mouth form
//     if (id === 'ParamMouthForm') view.mouthForm = val;
//     //mouth openY
//     if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
//     if (id === 'ParamCheek') view.cheek = val;
//     if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
//     if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
//     if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
//     if (id === 'ParamBreath') view.breath = val;
//     view.armLA = 0;
//     view.armRA = 0;
//     view.armLB = 0;
//     view.armRB = 0;
//     view.handL = 0;
//     view.handR = 0;
//     if (id === 'ParamHairFront') view.hairFront = val;
//     view.hairSide = 0;
//     if (id === 'ParamHairBack') view.hairBack = val;
//     view.hairFluffy = 0;
//     view.shoulderY = 0;
//     view.bustX = 0;
//     view.bustY = 0;
//     view.baseX = 0;
//     view.baseY = 0;
//     //特殊參數
//     if(isSpecifyParam == true)
//     {
//       view.specifyId = id;
//       view.specifyValue = val;
//     }
//   });
// }

// const fileUploader = document.getElementById('file');
// const regularSelector = document.getElementById('selectRegu');
// const specifySelector = document.getElementById('selectSpec');
// const regularParamName = document.getElementById('ParamRegu');
// const specifyParamName = document.getElementById('ParamSpec');
// const regularSlider = document.getElementById('sliderRegu');
// const specifySlider = document.getElementById('sliderSpec');
// const regularMin = document.getElementById('minRegu');
// const regularMax = document.getElementById('maxRegu');
// const specifyMin = document.getElementById('minSpec');
// const specifyMax = document.getElementById('maxSpec');
// const regularParamList = ['ParamAngleX','ParamAngleY','ParamAngleZ','ParamEyeLOpen','ParamEyeLSmile',
// 'ParamEyeROpen','ParamEyeRSmile','ParamEyeBallX','ParamEyeBallY','ParamEyeBallForm','ParamBrowLY',
// 'ParamBrowRY','ParamBrowLX','ParamBrowRX','ParamBrowLAngle','ParamBrowRAngle','ParamBrowLForm',
// 'ParamBrowRForm','ParamMouthForm','ParamMouthOpenY','ParamCheek','ParamBodyAngleX','ParamBodyAngleY',
// 'ParamBodyAngleZ','ParamBreath','ParamArmLA','ParamArmRA','ParamArmLB','ParamArmRB','ParamHandL',
// 'ParamHandR','ParamHairFront','ParamHairSide','ParamHairBack','ParamHairFluffy','ParamShoulderY',
// 'ParamBustX','ParamBustY','ParamBaseX','ParamBaseY'];//Cubism官方的標準參數
// var result;//讀取到的檔案
// var fReader = new FileReader();
// fileUploader.addEventListener('change', (e) => {  //選取檔案並讀取
//   const files = fileUploader.files[0];
//   fReader.onload = function (event) {
//     console.log(fReader.result);
//     result = fReader.result;
//     result = JSON.parse(result);  //轉換為Json物件
//     addOptionToSelect(result);
//   };
//   fReader.readAsText(files);
// });

// regularSelector.addEventListener('change', (e) => { //選擇標準參數的下拉式選單的選項時
//   regularParamName.innerText = regularSelector.options[regularSelector.value].text;
//   regularSlider.setAttribute('id',regularSelector.options[regularSelector.value].text);
// });

// specifySelector.addEventListener('change', (e) => { //選擇特殊參數的下拉式選單的選項時
//   specifyParamName.innerText = specifySelector.options[specifySelector.value].text;
//   specifySlider.setAttribute('id',specifySelector.options[specifySelector.value].text);
// });

// regularMin.addEventListener('change', (e) => { //改變標準參數的最小值時
//    if(regularMin.value != ""){
//     regularSlider.setAttribute('min',regularMin.value);
//    }
// });

// regularMax.addEventListener('change', (e) => { //改變標準參數的最大值時
//    if(regularMax.value != ""){
//     regularSlider.setAttribute('max',regularMax.value);
//    }
// });

// specifyMin.addEventListener('change', (e) => { //改變特殊參數的最小值時
//    if(specifyMin.value != ""){
//     specifySlider.setAttribute('min',specifyMin.value);
//    }
// });

// specifyMax.addEventListener('change', (e) => { //改變特殊參數的最大值時
//    if(specifyMax.value != ""){
//     specifySlider.setAttribute('max',specifyMax.value);
//    }
// });

// function addOptionToSelect(jsonFile){  //增加選項至下拉式選單
//   regularSelector.length = 0; //將請選擇選項刪除
//   specifySelector.length = 0;//將請選擇選項刪除
//   var regularParamValue = 0;  //紀錄每個標準參數所擁有的值
//   var specifyParamValue = 0;  //紀錄每個特殊參數所擁有的值
//   for (index = 0; index < jsonFile.Parameters.length; index++){
//     var option = document.createElement('option');
//     if(findElementIsInList(jsonFile.Parameters[index].Id,regularParamList) == true)
//     {
//       option.value = regularParamValue;
//       option.innerHTML = jsonFile.Parameters[index].Id;
//       regularSelector.appendChild(option);
//       regularParamValue += 1;
//     }
//     else
//     {
//       option.value = specifyParamValue;
//       option.innerHTML = jsonFile.Parameters[index].Id;
//       specifySelector.appendChild(option);
//       specifyParamValue += 1;
//     }
//   }
//   regularParamName.innerText = regularSelector.options[regularSelector.value].text;//匯入json檔後預設選中的參數要顯示在畫面上
//   regularSlider.setAttribute('id',regularSelector.options[regularSelector.value].text);//設定regularSlider的id
//   specifyParamName.innerText = specifySelector.options[specifySelector.value].text;//匯入json檔後預設選中的參數要顯示在畫面上
//   specifySlider.setAttribute('id',specifySelector.options[specifySelector.value].text);//設定specifySlider的id
// }

// function findElementIsInList(element,List){   //尋找此元素是否在陣列中
//     if(List.includes(element) == true)
//     {
//         return true;
//     }
//     return false;
// }









function setParam(event,isSpecifyParam){
  let val = parseFloat(event.target.value);
  let id = event.target.id;
  runModel(view => {
    //先傳到lapp delegate的view的參數
    //綁定參數
    if (id === 'ParamAngleX') view.angleX = val;
    if (id === 'ParamAngleY') view.angleY = val;
    if (id === 'ParamAngleZ') view.angleZ = val;
    if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
    if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
    if (id === 'ParamEyeROpen') view.eyeROpen = val;
    if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
    if (id === 'ParamEyeBallX') view.eyeBallX = val;
    if (id === 'ParamEyeBallY') view.eyeBallY = val;
    if (id === 'ParamEyeBallForm') view.eyeBallForm = val;
    if (id === 'ParamBrowLY') view.browLY = val;
    if (id === 'ParamBrowRY') view.browRY = val;
    if (id === 'ParamBrowLX') view.browLX = val;
    if (id === 'ParamBrowRX') view.browRX = val;
    if (id === 'ParamBrowLAngle') view.browLAngle = val;
    if (id === 'ParamBrowRAngle') view.browRAngle = val;
    if (id === 'ParamBrowLForm') view.browLForm = val;
    if (id === 'ParamBrowRForm') view.browRForm = val;
    //mouth form
    if (id === 'ParamMouthForm') view.mouthForm = val;
    //mouth openY
    if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
    if (id === 'ParamCheek') view.cheek = val;
    if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
    if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
    if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
    if (id === 'ParamBreath') view.breath = val;
    view.armLA = 0;
    view.armRA = 0;
    view.armLB = 0;
    view.armRB = 0;
    view.handL = 0;
    view.handR = 0;
    if (id === 'ParamHairFront') view.hairFront = val;
    view.hairSide = 0;
    if (id === 'ParamHairBack') view.hairBack = val;
    view.hairFluffy = 0;
    view.shoulderY = 0;
    view.bustX = 0;
    view.bustY = 0;
    view.baseX = 0;
    view.baseY = 0;
    //特殊參數
    if(isSpecifyParam == true)
    {
      view.specifyId = id;
      view.specifyValue = val;
    }
  });
}

const fileUploader = document.getElementById('file');
const regularSelector = document.getElementById('selectRegu');
const specifySelector = document.getElementById('selectSpec');
const regularParamName = document.getElementById('paramRegu');
const specifyParamName = document.getElementById('paramSpec');
const regularSlider = document.getElementById('sliderRegu');
const specifySlider = document.getElementById('sliderSpec');
const regularMin = document.getElementById('minRegu');
const regularMax = document.getElementById('maxRegu');
const specifyMin = document.getElementById('minSpec');
const specifyMax = document.getElementById('maxSpec');
const regularParamList = ['ParamAngleX','ParamAngleY','ParamAngleZ','ParamEyeLOpen','ParamEyeLSmile',
'ParamEyeROpen','ParamEyeRSmile','ParamEyeBallX','ParamEyeBallY','ParamEyeBallForm','ParamBrowLY',
'ParamBrowRY','ParamBrowLX','ParamBrowRX','ParamBrowLAngle','ParamBrowRAngle','ParamBrowLForm',
'ParamBrowRForm','ParamMouthForm','ParamMouthOpenY','ParamCheek','ParamBodyAngleX','ParamBodyAngleY',
'ParamBodyAngleZ','ParamBreath','ParamArmLA','ParamArmRA','ParamArmLB','ParamArmRB','ParamHandL',
'ParamHandR','ParamHairFront','ParamHairSide','ParamHairBack','ParamHairFluffy','ParamShoulderY',
'ParamBustX','ParamBustY','ParamBaseX','ParamBaseY'];//Cubism官方的標準參數
var result;//讀取到的檔案
var fReader = new FileReader();
fileUploader.addEventListener('change', (e) => {  //選取檔案並讀取
  const files = fileUploader.files[0];
  fReader.onload = function (event) {
    console.log(fReader.result);
    result = fReader.result;
    result = JSON.parse(result);  //轉換為Json物件
    addOptionToSelect(result);
  };
  fReader.readAsText(files);
});

document.querySelector('.Sliders').addEventListener('change', e => {
  setParam(e,false);
});

document.querySelector('.Slider2').addEventListener('change', e => {
  setParam(e,false);
});

document.querySelector('.Slider3').addEventListener('change', e => {
  setParam(e,true);
});

regularSelector.addEventListener('change', (e) => { //選擇標準參數的下拉式選單的選項時
  regularParamName.innerText = regularSelector.options[regularSelector.value].text;
  regularSlider.setAttribute('id',regularSelector.options[regularSelector.value].text);
});

specifySelector.addEventListener('change', (e) => { //選擇特殊參數的下拉式選單的選項時
  specifyParamName.innerText = specifySelector.options[specifySelector.value].text;
  specifySlider.setAttribute('id',specifySelector.options[specifySelector.value].text);
});

regularMin.addEventListener('change', (e) => { //改變標準參數的最小值時
   if(regularMin.value != ""){
    regularSlider.setAttribute('min',regularMin.value);
   }
});

regularMax.addEventListener('change', (e) => { //改變標準參數的最大值時
   if(regularMax.value != ""){
    regularSlider.setAttribute('max',regularMax.value);
   }
});

specifyMin.addEventListener('change', (e) => { //改變特殊參數的最小值時
   if(specifyMin.value != ""){
    specifySlider.setAttribute('min',specifyMin.value);
   }
});

specifyMax.addEventListener('change', (e) => { //改變特殊參數的最大值時
   if(specifyMax.value != ""){
    specifySlider.setAttribute('max',specifyMax.value);
   }
});

function addOptionToSelect(jsonFile){  //增加選項至下拉式選單
  regularSelector.length = 0; //將請選擇選項刪除
  specifySelector.length = 0;//將請選擇選項刪除
  var regularParamValue = 0;  //紀錄每個標準參數所擁有的值
  var specifyParamValue = 0;  //紀錄每個特殊參數所擁有的值
  for (index = 0; index < jsonFile.Parameters.length; index++){
    var option = document.createElement('option');
    if(findElementIsInList(jsonFile.Parameters[index].Id,regularParamList) == true)
    {
      option.value = regularParamValue;
      option.innerHTML = jsonFile.Parameters[index].Id;
      regularSelector.appendChild(option);
      regularParamValue += 1;
    }
    else
    {
      option.value = specifyParamValue;
      option.innerHTML = jsonFile.Parameters[index].Id;
      specifySelector.appendChild(option);
      specifyParamValue += 1;
    }
  }
  regularParamName.innerText = regularSelector.options[regularSelector.value].text;//匯入json檔後預設選中的參數要顯示在畫面上
  regularSlider.setAttribute('id',regularSelector.options[regularSelector.value].text);//設定regularSlider的id
  specifyParamName.innerText = specifySelector.options[specifySelector.value].text;//匯入json檔後預設選中的參數要顯示在畫面上
  specifySlider.setAttribute('id',specifySelector.options[specifySelector.value].text);//設定specifySlider的id
}

function findElementIsInList(element,List){   //尋找此元素是否在陣列中
    if(List.includes(element) == true)
    {
        return true;
    }
    return false;
}
