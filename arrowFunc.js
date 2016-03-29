'use strict';

//some simulation of promise
let get = function(url, callback){
  callback("123");
};

//component constructor
function TagComponent(url, targetDiv){
  this.url = url;
  this.target = targetDiv;
}

// using arrow symbol to send context to callback
TagComponent.prototype.render = function(){
  get(this.url, (data) =>{
    this.target = data;
  });
}

//initialize component
let comp = new TagComponent("http://foo.com", "div1");

comp.render();

//check results
console.log(comp.target);
