import {table,getMinifyRecord} from './utils/Airtable';

 const deleteTodo  = async (req, res) => {
  const {id} = req.body;
try{

  const deleteTodo = await table.destroy([
  id])
 
 
  res.status(200).json(getMinifyRecord(deleteTodo[0]));

} catch(err){
  console.log(err);
  res.status(500).json({error: err.message});
}
 
}
          
export default deleteTodo