import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [  /// aqui eu estou tipando o state... iso é padrão... podemos usar direto...
  T,
  Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initailState: T): Response<T>{
    const [stateThemeLocalStorage, setStateThemeLocalStorage] = useState(() => {
      const storageValue = localStorage.getItem(key)

      if(storageValue) {
       return JSON.parse(storageValue)
      } else {
        return initailState
      }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(stateThemeLocalStorage))
    }, [stateThemeLocalStorage, key])


    return [stateThemeLocalStorage, setStateThemeLocalStorage]
}

export default usePersistedState
