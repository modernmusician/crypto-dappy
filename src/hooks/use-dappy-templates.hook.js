import { useEffect, useReducer } from 'react'
import { defaultReducer } from '../reducer/defaultReducer'
import DappyClass from '../utils/DappyClass'
// import { generateDappies } from '../utils/dappies.utils'
import { query } from '@onflow/fcl'
import { LIST_DAPPY_TEMPLATES } from "../flow/list-dappies-script";

export default function useDappyTemplates() {
  const [state, dispatch] = useReducer(defaultReducer, { loading: false, error: false, data: [] })

  useEffect(() => {
    const fetchDappyTemplates = async () => {
      dispatch({ type: 'PROCESSING' })
      try {
        let res = await query({
          cadence: LIST_DAPPY_TEMPLATES,
        })
        let mappedDappies = Object.values(res).map(d => {
          return new DappyClass(d?.templateID, d?.dna, d?.name, d?.price)
        })
        dispatch({ type: 'SUCCESS', payload: mappedDappies })
          console.log("response: " + JSON.stringify(res));
      } catch (err) {
        dispatch({ type: 'ERROR' })
        console.log("error: " + err)
      }
    }
    fetchDappyTemplates() 
  }, [])

  return state
}
