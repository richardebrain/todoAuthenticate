import auth0 from "../../../lib/auth0";
import { table } from "../utils/Airtable";

const ownsRecord =(handler) => auth0.withApiAuthRequired(async (req, res) => {
    const {user} = auth0.getSession(req, res);
    const {id} = req.body;
    try{
        const existingRecord = await table.find(id);
        if(!existingRecord || existingRecord.fields.userId !== user.sub){ 
            req.status(403).json({error: "You do not own this record"});
          
        }
        req.record = existingRecord;
        return handler(req, res);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
    

})
export default ownsRecord;