# React Vlag

### Create a context, provider to manage the feature flag state.

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
### Create a hook to check whether the feature is enabled or not:

```
const ff = useVlag()

if (ff.isEnabled('beta_feature')) {
  return <BetaFeature />
}

return <ReleasedFeature />
```

### Create a render prop component to check whether the feature is enabled or not:

```
import { Vlag } from '@vincere/react-vlag'

return (
  <Vlag name="beta_feature">
    {isActive => isActive ? <BetaFeatures /> : <ReleasedFeature />}
  </Vlag>
)
```