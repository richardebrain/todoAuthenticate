const Airtable = require("airtable");
const base = new Airtable({ apiKey: 'keyaPgxIDBfllIJMR' }).base(
  'apphkxywFgKN9M6TQ'
);
const table = base('Todos');
const getMinifyRecord = (record) => {
  if(!record.fields.completed){
    record.fields.completed = false;
  }
  return {
    id: record.id,
    fields: record.fields
  }

}
const minifyRecords =(records)=>{
  return records.map(record=>getMinifyRecord(record));

}
export {table,minifyRecords,getMinifyRecord};