## Usage

```jsx
// Component
import ReactDOM from 'react-dom'
import { QRious } from 'react-qrious'

ReactDOM.render(
  <QRious value="https://blog.1stg.me" />,
  document.getElementById('qrious'),
)

// hooks
import { useQrious } from 'react-qrious'

export const App = () => {
  const [value, setValue] = useState('https://blog.1stg.me')
  const [dataUrl, _qrious] = useQrious({ value })
  return (
    <div>
      dataUrl: {dataUrl}
      <img src={dataUrl} />
      <input onChange={e => setValue(e.currentTarget.value)} />
    </div>
  )
}
```

## Available Props

| prop              | type                                 | default value |
| ----------------- | ------------------------------------ | ------------- |
| `background`      | `string` (CSS color)                 | `"#ffffff"`   |
| `backgroundAlpha` | `number` (0.1-1.0)                   | `1.0`         |
| `foreground`      | `string` (CSS color)                 | `"#000"`      |
| `foregroundAlpha` | `number` (0.1-1.0)                   | `1.0`         |
| `level`           | `string` ("L", "M", "Q", "H")        | `"L"`         |
| `mime`            | `string` ("image/png", "image/jpeg") | `"image/png"` |
| `padding`         | `number`                             | `null`        |
| `size`            | `number`                             | `100`         |
| `value`           | `string`                             |
