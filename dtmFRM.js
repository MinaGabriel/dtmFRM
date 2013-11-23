var FRM = function(){
  var Global_object = {},
   day_abbreviated = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
   day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
   month_abbreviated = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
   month = ["January","February","March","April","May","June","July","August","September","October","November","December"],
      
   format_Spacifier = {
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
      format_Spacifier.date = datetime;
      
       var format_array = format.split(" ");
       var format_array_first = format_array[0].split("/");
      
       var final_array = [];
      
       //loop in the first part and compute 
      
      for(var i =0, l = format_array_first.length;i <l ; i++){
        console.log(format_array_first[i]);
        final_array.push(format_Spacifier[format_array_first[i]]());
      }
      return final_array;
      // return format_Spacifier.yyyy();
    }
      
    
    
    return 'Not a valid date time or format';
     
   
  };
  
  
  
  
  
  
};

var f = new FRM();
console.log(f.toString("1/12/2015 5:25:26","yyyy/MM/dd"));
