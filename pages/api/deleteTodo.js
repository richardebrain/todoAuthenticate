import {table,getMinifyRecord} from './utils/Airtable';
import auth0 from '../../lib/auth0';
import ownsRecord from './middleware/ownsRecord';

 const deleteTodo  = async (req, res) => {
  const {id} = req.body;
  const session = auth0.getSession(req,res);
try{

  const deleteTodo = await table.destroy([
  id])
 
 
  res.status(200).json(getMinifyRecord(deleteTodo[0]));

} catch(err){
  console.log(err);
  res.status(500).json({error: err.message});
}
 
}
          
export default auth0.withApiAuthRequired(deleteTodo)