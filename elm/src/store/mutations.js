import {CHANGECOUNT,CHANGECLERTMSG} from './mutations-type.js';
var times;
export default {
  [CHANGECOUNT]: (state)=>{
    console.log(123);
    state.count = state.count + 'test';
  },
  [CHANGECLERTMSG]:(state,text)=>{
    state.alertMsg = text;
    clearTimeout(times);
    times = setTimeout(function () {
      state.alertMsg = '';
    },2000);
  }
};