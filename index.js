// Base Component 继承自 React.Component
// 引用 immutable.js，重写组件的 shouldComponentUpdate，减少组件不必要的更新，优化性能
import { Component } from 'react'
import { is, fromJS } from 'immutable'

export const pureRender = component => {
  component.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  return component
}

@pureRender
export default class Base extends Component {}
