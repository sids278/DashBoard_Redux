// interface first{
//   data:object
// }
const intialState={
  data:[{ year: '2015', sales: 120 },
  { year: '2016', sales: 200 }]
}



export const apiReducer=(state=intialState,action:any)=>{
  switch(action.type){
    case('setData'):
    // console.log('execution ...')
      //  state.data+=action.payload.data
      console.log(action.payload)
       state.data = [...state.data, action.payload]
      //  console.log('yu')
       return state
    default :
       return state
       
  }
}