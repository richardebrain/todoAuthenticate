import auth0 from '../../lib/auth0';

import {table} from './utils/Airtable';


const createTodo = async (req, res) => {
  const {description} = req.body;
  const session = auth0.getSession(req,res);
try{

  const createdRecords = await table.create([{
    fields: {
      description,
      userId: session.user.sub,
    }
  }])
  const createdRecord ={
    id: createdRecords[0].id,
    fields: createdRecords[0].fields

  }
 
  res.status(200).json( createdRecord);

} catch(err){
  console.log(err);
  res.status(500).json({error: err.message});
}
 
}

export default auth0.withApiAuthRequired(createTodo);
