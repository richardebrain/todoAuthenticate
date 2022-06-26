import {table,getMinifyRecord} from './utils/Airtable';

 const updateTodo  = async (req, res) => {
  const { id, fields } = req.body;
try{

  const updatedRecord = await table.update([{
    id,
  fields,
  },])
 
 
  res.status(200).json(getMinifyRecord(updatedRecord[0]));

} catch(err){
  console.log(err,'error setting todo');
  res.status(500).json({error: err.message});
}
 
}
        
export default updateTodo