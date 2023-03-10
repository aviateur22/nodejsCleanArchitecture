import todoItem from './todoItem'
export default  {
  schema :{
    body: {
      type: 'object',
      properties: {
        id: { type: 'string'},
        title: { type: 'string', minLength: 2 },
        description: { type: 'string', minLength: 2 },
        status: { type: 'boolean'}
      },
      required: ['id', 'title', 'status'],
      additionalProperties: false
    },
    response: {
      200: todoItem
    }    
  }
}