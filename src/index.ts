class EventHub {
  //cache用来保存发布的函数
  // eventName1:[fn1,fn2,fn3];
  // eventName2:[fn2,fn3,fn3];
  cache = {};
  on(eventName,fn){
    //代码优化
    /*if(this.cache[eventName] === undefined){
      this.cache[eventName] = [];
    }
    const array = this.cache[eventName];
    array.push(fn);*/

    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName,data?){
    //代码优化
    /*let array = this.cache[eventName];
    if(array === undefined){
      array = [];
    }
    array.forEach(fn=>{
      fn();
    })*/
    (this.cache[eventName] || []).forEach(fn=>fn(data));
  }
  off(eventName,fn){
    //this.cache[eventName] = this.cache[eventName] || [];
    //let index;
    // for(let i = 0; i <this.cache[eventName].length; i++){
    //   if(this.cache[eventName][i] === fn){
    //     index = i;
    //     break;
    //   }
    // }
    // if(index === undefined){
    //   return;
    // }else{
    //   this.cache[eventName].splice(index,1);
    // }
    let index = indexOf(this.cache[eventName],fn);
    if(index === -1) return;
    this.cache[eventName].splice(index,1);
  }
}

export default EventHub;

/**
 * 帮助函数 indexOf
 * @param array
 * @param item
 */
function indexOf(array, item){
  let index = -1;
  if(array === undefined){
    return index;
  }
  for(let i = 0; i <array.length; i++){
    if(array[i] === item){
      index = i;
      break;
    }
  }
  return index;
}