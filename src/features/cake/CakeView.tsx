import React,{useState} from 'react';
import { connect } from 'react-redux';
import { ordered,restocked } from './cakeSlice';


interface ICakeView{ 
cakes:object,
addOneCake:() => void,
addMoreCakes:(number:Number) => void
}

const CakeView = ({
  cakes,addOneCake,addMoreCakes
}: ICakeView
) => {
    const { num_of_cakes } :  any = cakes
    const [inputVal,setInputVal] = useState<number>(0)

  return (
    <div>
      <h3>Number of cakes : {num_of_cakes}</h3>
      <input 
      type='number' 
      value = {inputVal}
      onChange = {(e:any)=> setInputVal(e.target.value)}
      />
      <button
      onClick = {() =>addOneCake() }
      >ordered cake</button>
      <button
      onClick = { () =>addMoreCakes(Number(inputVal))}
      >restocked cake</button>
    </div>
  );
}

const mapStateToProps = (state:any) => { 
    console.log(state);
    return { 
        cakes:state.cake
    }
}

const mapDispatchToProps = (dispatch:any) => { 
    return{ 
        addOneCake : () => dispatch(ordered()),
        addMoreCakes : (inputVal:any) => dispatch(restocked(inputVal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeView);
