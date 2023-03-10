import todoItem from "./todoItem";

export default  {
  schema :{
    response: {
      200: {
        type: 'array',
        items: todoItem
      }
    }
  }
}