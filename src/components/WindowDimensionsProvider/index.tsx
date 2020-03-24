import React, { createContext, useContext, useEffect, useState } from 'react'

export const WindowDimensionsCtx = createContext({
  height: 0,
  width: 0,
})

const windowDims = () => ({
  height: typeof window !== `undefined` ? window.innerHeight : 0,
  width: typeof window !== `undefined` ? window.innerWidth : 0,
})

interface IWindowDimensionsProvider {
  children: React.ReactNode
}

const WindowDimensionsProvider = (props: IWindowDimensionsProvider) => {
  const [dimensions, setDimensions] = useState(windowDims())
  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDims())
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {props.children}
    </WindowDimensionsCtx.Provider>
  )
}

export default WindowDimensionsProvider

export const useWindowDimensions = () => {
  return useContext(WindowDimensionsCtx)
}
