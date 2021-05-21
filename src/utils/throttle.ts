function throttle(fn,interval){
  var _self=fn; //保存需要被延长执行的函数引用
  var timer;
  var firstTime=true;   //是否是第一次调用

  return function (){
      var args=arguments;
      var _this=this;
      if(firstTime){  //如果第一次调用，不需要延迟执行
          _self.apply(_this,args);
          return firstTime = false;
      }
      if(timer){  //如果定时器还在，说明前一次延迟执行还没有完成
          return false;
      }
      timer = setTimeout(function(){  //延迟一段时间执行
          clearTimeout(timer);
          timer=null;
          _self.apply(_this,args);
      },interval || 500);
  };
};

export  {throttle}