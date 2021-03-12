import EventHub from '../src/index';
console.log(EventHub);

const eventHub = new EventHub();

type TestCase = (msg: string) => void;

/*
//console.assert(true === (eventHub instanceof Object),"eventHub是个对象");

// on emit
let called = false;
eventHub.on('xxx',(y)=>{
  called = true;
  console.log(y === '今天林志琳结婚啦');
});

eventHub.emit('xxx','今天林志琳结婚啦');

const eventHub2 = new EventHub();



// on emit
let called2 = false;
const fn1 = ()=>{
  called2 = true;
}
eventHub2.on('yyy',fn1);
eventHub2.off('yyy',fn1);
eventHub2.emit('yyy');
setTimeout(()=>{
  console.log(called2);
},1000)
*/

const test1: TestCase = (msg:string)=>{
  console.assert(true === (eventHub instanceof Object),"eventHub是个对象");
  console.log(msg);
}

const test2 : TestCase = msg =>{
  let called = false;
  const eventHub = new EventHub();
  eventHub.on('xxx',(y)=>{
    called = true;
    console.assert(y === '今天林志琳结婚啦');
  });
  eventHub.emit('xxx','今天林志琳结婚啦');
  setTimeout(()=>{
    console.assert(called);
    console.log(msg);
  },1000);
}

const test3: TestCase = (msg:string)=>{
  const eventHub = new EventHub();
  let called2 = false;
  const fn1 = ()=>{
    called2 = true;
  }
  eventHub.on('yyy',fn1);
  eventHub.off('yyy',fn1);
  eventHub.emit('yyy');
  setTimeout(()=>{
    console.assert(called2);
    console.log(msg);
  },1000)
}

test1('eventHub可以创建对象');
test2('样例测试2');
test3('样例测试3');