# react-native-tooltip-overhaul

![ts](https://badgen.net/badge/icon/typescript?icon=typescript&label) ![license](https://badgen.net/github/license/eqlion/react-native-tooltip-overhaul) [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

Tool tips library for React Native

## Installation

```sh
npm install react-native-tooltip-overhaul
```

or

```sh
yarn add react-native-tooltip-overhaul
```

This is it, you are good to go!

## Usage

```tsx
import {Tip, TipProvider} from 'react-native-tooltip-overhaul'

// wrap your app with TipProvider as early as possible - it allows to draw over other elements

const App: FC = () => {
  return (
    <TipProvider>
      {/* All your other providers/components go here */}
    </TipProvider>
  )
}

// ...

const MyComponentWithTip: FC = () => {
  const renderTip = useCallback(
    () => (
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}>
        <Text style={{color: '#000'}}>Text that will be shown on the tip</Text>
      </View>
    ),
    [],
  )

  return (
    <Tip renderTip={renderTip}>
      <Text>Pressing this text will open the tip</Text>
    </Tip>
  )
}
```

For more examples see [example app](example/src/App.tsx)

## Props

| Prop name   | Type                    | Description                                                                                                                                                                                                                                                                                                                                   |
| ----------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `renderTip` | `() => React.ReactNode` | Function that renders tip                                                                                                                                                                                                                                                                                                                     |
| `position`  | `ETipPosition`          | Where to show the tip: above/below/on the left side/on the right side of the item or automatically (it will try to show the tip bellow and centered, if the item is at the bottom of the screen, it will show above instead. If the tip touches horizontal sides of the screen, it will be moved horizontally). **Default ETipPosition.AUTO** |
| `pressable` | `boolean`               | If pressing item should show the tip. **Default true**                                                                                                                                                                                                                                                                                        |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
