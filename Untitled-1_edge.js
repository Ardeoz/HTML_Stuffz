/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle',
            type:'rect',
            rect:['52px','86px','280px','196px','auto','auto'],
            fill:["rgba(255,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["inset",0,0,91,22,"rgba(0,0,0,0.65)"],
            transform:[[],['-22deg']]
         },
         {
            id:'Ellipse',
            type:'ellipse',
            rect:['32px','412px','327px','254px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["inset",0,3,118,35,"rgba(255,0,0,0.65)"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['88px','176px','auto','auto','auto','auto'],
            text:"Test page 1",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',45,"rgba(0,0,0,1)","normal","none","normal"],
            transform:[[],['-18deg']]
         },
         {
            id:'Text3',
            type:'text',
            rect:['69px','502px','auto','auto','auto','auto'],
            text:"Test Page 2<br>",
            align:"center",
            font:['Verdana, Geneva, sans-serif',45,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.blur", '118px'],
            ["subproperty", "boxShadow.spread", '35px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(255,0,0,0.65)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '480px'],
            ["style", "height", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["transform", "rotateZ", '-22deg'],
            ["style", "left", '52px'],
            ["style", "top", '86px'],
            ["subproperty", "boxShadow.blur", '91px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '22px']
         ],
         "${_Text2}": [
            ["transform", "rotateZ", '-18deg'],
            ["style", "left", '88.28px'],
            ["style", "font-size", '45px'],
            ["style", "top", '176px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
         ],
         "${_Text3}": [
            ["style", "top", '502px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '69px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7570658");
