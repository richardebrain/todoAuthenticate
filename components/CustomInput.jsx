const CutsomInput = ({id,label,...otherProps}) => {
    return (
        <label htmlFor={id} className={`${label ?'flex-1': ''} `}>
                 <input {...otherProps}/>
        </label>
   
            
       
    );
}

export default CutsomInput;