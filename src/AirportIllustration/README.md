# AirportIllustration

To implement AirportIllustration component into your project you'll need to add the import:

```jsx
import AirportIllustration from "@kiwicom/orbit-components/lib/AirportIllustration";
```

After adding import into your project you can use it simply like:

```jsx
<AirportIllustration name="Accommodation" size="small" />
```

## Props

Table below contains all types of the props available in AirportIllustration component.

| Name       | Type            | Default    | Description                                                                                                                                     |
| :--------- | :-------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| dataTest   | `string`        |            | Optional prop for testing purposes.                                                                                                             |
| **name**   | [`enum`](#enum) |            | Name for the displayed Airportillustration.                                                                                                     |
| size       | [`enum`](#enum) | `"medium"` | The size of the AirportIllustration.                                                                                                            |
| spaceAfter | `enum`          |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken) |

### enum

| name             | size        |
| :--------------- | :---------- |
| `"BGYFastTrack"` | `"small"`   |
| `"BUDFastTrack"` | `"medium"`  |
| `"MRSSmartPass"` | `"large"`   |
| `"NCEFastTrack"` | `"display"` |
| `"PRGSmartPass"` |
| `"VCESmartPass"` |
