import todoItem from './todoItem'
export default  {
  schema :{
    body: {
      type: 'object',
      properties: {
        title: { type: 'string', minLength: 2 },
        description: { type: 'string', minLength: 2 }
      },
      required: ['title'],
      additionalProperties: false
    },
    response: {
      201: todoItem
    }    
  }
}



// export default {
//   type: 'object',
//   properties: {
//     title: { type: 'string', minLength: 2 },
//     description: { type: 'string', minLength: 2 }, 
    
//   },
//   errorMessage: {
//     required: {
//       title: 'fhhfhdhd'
//     }
//   }
// }