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
            id:'RoundRect',
            type:'rect',
            rect:['78px','188px','324px','404px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[0,"rgba(0,0,0,0.00)","none"],
            boxShadow:["",3,3,3,43,"rgba(0,255,13,0.65)"]
         },
         {
            id:'Text',
            type:'text',
            rect:['38px','350px','auto','auto','auto','auto'],
            text:"SUCCESS",
            font:['Arial, Helvetica, sans-serif',86,"rgba(0,0,0,1)","normal","none","italic"],
            transform:[[],['-54deg']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "width", '480px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '78px'],
            ["style", "width", '324px'],
            ["style", "top", '188px'],
            ["subproperty", "boxShadow.color", 'rgba(0,255,13,0.65)'],
            ["subproperty", "boxShadow.spread", '43px'],
            ["style", "height", '404px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px']
         ],
         "${_Text}": [
            ["style", "top", '349.86px'],
            ["transform", "rotateZ", '-54deg'],
            ["style", "font-style", 'italic'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '38px'],
            ["style", "font-size", '86px']
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
})(jQuery, AdobeEdge, "EDGE-8028530");
