# react-pure-render-component

引用 immutable.js, 重写组件的 shouldComponentUpdate，减少组件不必要的 render

## Scripts

```
npm install

// 打包
npm run build

// test
npm run test

```

## Usage

```
  npm install react-pure-render-component

  // 引入 react base component
  import Base form 'react-pure-render-component'

  class Demo extends Base {
    ...
  }

  // 引入 pureRender
  import { pureRender } from 'react-pure-render-component'

  @pureRender
  class Demo extends React.Component {
    ...
  }
```

## LICENSE

[MIT](https://github.com/OPiece/react-pure-render-component/blob/master/LICENSE)
