import {table,minifyRecords} from './utils/Airtable';

 const getTodos  = async (req, res) => {
try{

  const records = await table.select({}).firstPage();
  const minifiedRecords = minifyRecords(records);
  res.status(200).json( minifiedRecords);

} catch(err){
  res.status(500).json({error: err.message});
}
 
}
        
export default getTodos