import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true, error:null });

    useEffect(() => {
        return () => {
            //this runs when the components is unmounted
            isMounted.current = false
        }

    }, [])
    useEffect(() => {

        setState({data: null, loading: true, error: null })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
/*                 setTimeout(() => {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })

                }, 5000) */

    /*             if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }else{
                    console.log('set state no se llamo')
                }  */

                setState({
                    loading: false,
                    error: null,
                    data
                })
            })
    }, [url])

    return state
}
