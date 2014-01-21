var FRM = function(){
  var Global_object = {},
   day_abbreviated = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
   day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
   month_abbreviated = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
   month = ["January","February","March","April","May","June","July","August","September","October","November","December"],
      
   format_Specifier = {
  unix : function(){
      return new Date(this.date);
  },
  d: function(){ // day of month 1 through 31 
    return this.unix().getDate();
  },
  dd : function(){ //day of month 01 through 31
    return (this.unix().getDate() < 10 ? '0' : '')  + (this.unix().getDate());
  },
  ddd :function(){ //abbreviated name of the day of the week.
    return day_abbreviated[this.unix().getDay()];
  },
  dddd :function(){ //abbreviated name of the day of the week.
    return day[this.unix().getDay()];
  },
  h : function (){ //houres 1 through 12
    return ((this.unix().getHours() + 11) % 12 + 1);
  },
  hh: function(){ //houres 01 through 12
    return (((this.unix().getHours() + 11) % 12 + 1) < 10 ? "0" : "") + ((this.unix().getHours() + 11) % 12 + 1) ; 
  },
  H : function(){ //houres 00 through 24 
    return  this.unix().getHours();
  },
  HH : function(){
    return (this.unix().getHours() < 10 ? "0" : "") + this.unix().getHours();
  },
  m : function(){ // minute from 0 59 
    return this.unix().getMinutes();
  },
  mm : function(){ // minutes 00 through 59
    return (this.unix().getMinutes() < 10 ? "0" : "") + this.unix().getMinutes();
  },
  M: function(){ // 1 through 12. 
    return this.unix().getMonth() + 1 ;
  },
  MM: function(){ // 01 through 12.
  return (this.unix().getMonth() < 10 ? '0' : '') + (this.unix().getMonth() + 1); 
  },
  MMM: function(){ //  abbreviated name of the month.
    return month_abbreviated[this.unix().getMonth()];
  },
  MMMM: function(){ // full name of the month.
      
    return month[this.unix().getMonth()];
  },
  s: function(){ // seconds 0 through 59 
    return this.unix().getSeconds();
  },
  ss: function(){ // seconds 00 through 59 
    return (this.unix().getSeconds() < 10 ? "0" : "") + this.unix().getSeconds(); 
  },
  y:function(){
     return String(this.unix().getFullYear()).substr(3);
  },
  yy: function(){
    return String(this.unix().getFullYear()).substr(2);
  },
  yyyy: function(){
    return this.unix().getFullYear();
  }
  
};
    
  this.toString = function(datetime, format){
    if(!isNaN(new Date(datetime).getTime())){
        
      format_Specifier.date = datetime;
        //TODO : Chaining or replace change the replaced 
      var dtmFRM = format.replace(/dddd/g,format_Specifier.dddd())
                             .replace(/ddd/g,format_Specifier.ddd())
                             .replace(/dd/g, format_Specifier.dd())
                             .replace(/d/g, format_Specifier.d())
                             .replace(/hh/g, format_Specifier.hh())
                             .replace(/HH/g, format_Specifier.HH())
                             .replace(/h/g, format_Specifier.h())
                             .replace(/MMMM/g, format_Specifier.MMMM())
                             .replace(/MMM/g, format_Specifier.MMM())
                             .replace(/MM/g, format_Specifier.MM())
                             .replace(/mm/g, format_Specifier.mm())
                             .replace(/m/g, format_Specifier.m())
                             .replace(/M/g, format_Specifier.M())
                             .replace(/ss/g, format_Specifier.ss())
                             .replace(/s/g, format_Specifier.s())
                             .replace(/yyyy/g, format_Specifier.yyyy())
                             .replace(/yy/g, format_Specifier.yy())
                             .replace(/y/g, format_Specifier.y());
        
      return dtmFRM;
    }
    return 'Not a valid date time or format';
  };  
};

var f = new FRM();
console.log(f.toString("01/12/2015 5:25:26","dddd/MMMM/d"));
