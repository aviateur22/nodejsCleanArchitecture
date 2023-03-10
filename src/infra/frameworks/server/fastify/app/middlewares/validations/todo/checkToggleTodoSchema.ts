import todoItem from './todoItem'
export default  {
  schema :{
    body: {
      type: 'object',
      properties: {
        id: { type: 'string'},
        status: { type: 'boolean' }
      },
      required: ['id', 'status'],
      additionalProperties: false
    },
    response: {
      200: todoItem
    }    
  }
}