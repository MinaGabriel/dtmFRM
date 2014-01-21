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
  ampm :function(){
      return this.unix().getHours() >= 12 ? "PM" : "AM" ;
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
        var dtmFRM = format.replace(/(\b)dddd(\b)/g,format_Specifier.dddd())
                             .replace(/(\b)ddd(\b)/g,format_Specifier.ddd())
                             .replace(/(\b)dd(\b)/g, format_Specifier.dd())
                             .replace(/(\b)d(\b)/g, format_Specifier.d())
                             .replace(/(\b)hh(\b)/g, format_Specifier.hh())
                             .replace(/(\b)HH(\b)/g, format_Specifier.HH())
                             .replace(/(\b)h(\b)/g, format_Specifier.h())
                             .replace(/(\b)MMMM(\b)/g, format_Specifier.MMMM())
                             .replace(/(\b)MMM(\b)/g, format_Specifier.MMM())
                             .replace(/(\b)MM(\b)/g, format_Specifier.MM())
                             .replace(/(\b)mm(\b)/g, format_Specifier.mm())
                             .replace(/(\b)m(\b)/g, format_Specifier.m())
                             .replace(/(\b)M(\b)/g, format_Specifier.M())
                             .replace(/(\b)ss(\b)/g, format_Specifier.ss())
                             .replace(/(\b)ampm(\b)/g, format_Specifier.ampm())
                             .replace(/(\b)s(\b)/g, format_Specifier.s())
                             .replace(/(\b)yyyy(\b)/g, format_Specifier.yyyy())
                             .replace(/(\b)yy(\b)/g, format_Specifier.yy())
                             .replace(/(\b)y(\b)/g, format_Specifier.y());
        
      return dtmFRM;
    }
    return 'Not a valid date time or format';
  };  
};

var f = new FRM();
console.log(f.toString(1390324484209,"MM/dd/yyyy hh:mm:ss ampm"));
