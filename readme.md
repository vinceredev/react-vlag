# React Vlag

Getting easy to set feature flag

### Add provider to your src/index.js

```
import { VlagProvider } from '@vincere/react-vlag'

const flags = [
  {
    id: 'beta_feature',
    name: 'Beta Feature',
    description: 'Some texts',
    helperText: '',
    disabled: false
  }
]

<VlagProvider flags={flags}>
  <App />
</VlagProvider>
```

### Hook to check the feature is enabled or not:

```
import { useVlag } from '@vincere/react-vlag'

const ff = useVlag()

if (ff.isEnabled('beta_feature')) {
  return <BetaFeature />
}

return <ReleasedFeature />
```

### Render prop component to check the feature is enabled or not:

```
import { Vlag } from '@vincere/react-vlag'

return (
  <Vlag name="beta_feature">
    {isActive => isActive ? <BetaFeatures /> : <ReleasedFeature />}
  </Vlag>
)
```

### How to show toogle feature's page:

```
import { Features } from '@vincere/react-vlag'
import '@vincere/react-vlag/dist/style.css'

const Pages = () => {
  return (
    <>
      <Heading>Feature Flags</Heading>
      <Features />
    </>
  )
}
```
