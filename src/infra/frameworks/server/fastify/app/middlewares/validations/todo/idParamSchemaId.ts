import todoItem from './todoItem'
export default  {
  schema :{
    params: {
      type: 'object',
      properties: {
        id: { type: 'string'}        
      },
      required: ['id'],
      additionalProperties: false
    }    
  }
}