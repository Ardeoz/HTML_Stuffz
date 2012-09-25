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
            ["style", "width", '480px'],
            ["style", "height", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text}": [
            ["style", "top", '349.86px'],
            ["transform", "rotateZ", '-54deg'],
            ["style", "font-style", 'italic'],
            ["style", "left", '38px'],
            ["style", "text-decoration", 'none'],
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
