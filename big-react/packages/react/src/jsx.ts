//ReactElement
import  {REACT_ELEMENT_TYPE}    from 'shared/ReactSymbols'
const ReactElement =    function (type,key,ref,props)   {
    const elements  =   {
        $$typeof:REACT_ELEMENT_TYPE,
        key,
        ref,
        props,
        __mark: 'test'
    }
    return  elements
}