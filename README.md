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

Also [react-native-safe-area-context]() is required for the tip to work properly. You can install it using

```sh
npm install react-native-safe-area-context
```

or

```sh
yarn add react-native-safe-area-context
```

Don't forget to install iOS pods afterwards!

```sh
npx pod-install
```

## Usage

```tsx
import {Tip, TipProvider} from 'react-native-tooltip-overhaul'
// If you are using react-navigation, you can skip SafeAreaProvider,
// as it is already included in Navigator
import {SafeAreaProvider} from 'react-native-safe-area-context'

// wrap your app with TipProvider as early as possible - it allows to draw over other elements

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <TipProvider>
        {/* All your other providers/components go here */}
      </TipProvider>
    </SafeAreaProvider>
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

| Prop name        | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `renderTip`      | `() => React.ReactNode`                              | Function that renders tip                                                                                                                                                                                                                                                                                                                     |
| `position`       | `ETipPosition`                                       | Where to show the tip: above/below/on the left side/on the right side of the item or automatically (it will try to show the tip bellow and centered, if the item is at the bottom of the screen, it will show above instead. If the tip touches horizontal sides of the screen, it will be moved horizontally). **Default ETipPosition.AUTO** |
| `pressable`      | `boolean`                                            | If pressing item should show the tip. **Default true**                                                                                                                                                                                                                                                                                        |
| `overlayOpacity` | `number`                                             | The opacity of the overlay that is shown when the tip is opened. **Default 0.6**                                                                                                                                                                                                                                                              |
| `offsets`        | `number \| {horizontal?: number, vertical?: number}` | The offsets of the tip relative to the children component. **Default {horizontal: 0, vertical: 0}**                                                                                                                                                                                                                                           |
| `onShow`         | `() => void`                                         | Callback, that is called when the tip is opened                                                                                                                                                                                                                                                                                               |
| `onClose`        | `() => void`                                         | Callback, that is called when the tip is closed                                                                                                                                                                                                                                                                                               |

## Methods

| Method name | Description    |
| ----------- | -------------- |
| `showTip`   | Shows the tip  |
| `close tip` | Closes the tip |

For methods usage example see [example app](example/src/screens/ImperativeScreen.tsx)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
