import {table,getMinifyRecord} from './utils/Airtable';
import auth0 from '../../lib/auth0';


 const updateTodo  = async (req, res) => {
  const { id, fields } = req.body;
  const session = auth0.getSession(req,res);
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
        
export default auth0.withApiAuthRequired(updateTodo)