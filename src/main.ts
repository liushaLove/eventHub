class EventHub {
  //cache用来保存发布的函数
  // eventName1:[fn1,fn2,fn3];
  // eventName2:[fn2,fn3,fn3];
  private cache: {[key:string]: Array<(unknown)=>void> } = {};

  on(eventName: string, fn: (data: unknown) => void) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName:string,data?:unknown){
    (this.cache[eventName] || []).forEach(fn=>fn(data));
  }
  off(eventName:string,fn: (data: unknown) => void){
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