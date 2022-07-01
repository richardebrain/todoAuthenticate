import {table,minifyRecords} from './utils/Airtable';
import auth0 from '../../lib/auth0';


 const getTodos  = async (req, res) => {
  const session = auth0.getSession(req, res);
try{

  const records = await table.select({
    filterByFormula:`userId = "${session.user.sub}"`,
  }).firstPage();
  const minifiedRecords = minifyRecords(records);
  res.status(200).json( minifiedRecords);

} catch(err){
  res.status(500).json({error: err.message});
}
 
}
        
export default auth0.withApiAuthRequired(getTodos)