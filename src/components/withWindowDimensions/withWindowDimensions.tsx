import React, {forwardRef, PureComponent} from 'react'
import {WindowDimensionsCtx} from '../WindowDimensionsProvider'

const withWindowDimensions = (mapDimensionsToProps: any) => (
  WrappedComponent: any,
) => {
  class Wrapped extends PureComponent<{forwardedRef: any}> {
    public render() {
      const {forwardedRef} = this.props
      return (
        <WindowDimensionsCtx.Consumer>
          {(dimensions) => (
            <WrappedComponent
              {...this.props}
              {...mapDimensionsToProps(dimensions)}
              ref={forwardedRef}
            />
          )}
        </WindowDimensionsCtx.Consumer>
      )
    }
  }

  return forwardRef((props, ref) => <Wrapped {...props} forwardedRef={ref} />)
}

export default withWindowDimensions

/**
 * sample usage:
 *
 * import React from 'react'
 * import withWindowDimensions from '../withWindowDimensions'
 *
 * const DumbComponent = ({ width }) => (
 *   <span>Page is {width} pixels wide.</span>
 * )
 *
 * const mapDimensionsToProps = dimensions => ({
 *   width: dimensions.width,
 * })
 *
 * export default withWindowDimensions(mapDimensionsToProps)(DumbComponent)
 *
 */
