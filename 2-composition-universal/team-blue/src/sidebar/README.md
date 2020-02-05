# Sidebar

> Componente de Sidebar.

Este componente es incluido por `Layout` que es el encargado de mostrar el Panel de MP de forma correcta. Para conocer mas como funciona el componente `Sidebar` leer la siguiente documentación del [middleware layout](/docs/middlewares/layout.md). Hay que tener en cuenta que el uso directo de este componente no es recomendable, ya que al utilizar el componente `Layout` usando el middleware que le corresponde este, ya soluciona la navegación del Panel.

## Uso

Debes incluir los estilos en tu aplicación.
```css
/* Para desktop */
@import '~@panel-layout/sidebar/styles/desktop';
```

```css
/* Para mobile */
@import '~@panel-layout/sidebar/styles/mobile';
```

Luego, importa el componente `Sidebar` en tu página o vista:
```js
/**
 * Module dependencies
 */
const React = require('react');
const Sidebar = require('@panel-layout/sidebar');

const device = { ... };
const navigation = { ... };

/**
 * Page with Sidebar
 */
class DemoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sidebar
        panelSelector=".mp-main"
        device={device}
        navigation={navigation}
      />
    );
  }
}
```

### Props

Property|Type|isRequired|Default|Description
---|---|---|---|---
panelSelector|string|`true`||Se utiliza para el correcto funcionamiento de `slideout.js`
active|string|`false`|`''`|Indica que sección de la navegación esta seleccionada.
device|object|`true`||Es un objeto con propiedades relacionadas con el device.
navigation|object|`true`||Es un objeto con propiedades relacionadas con la navegación y el usuario.

## License

© 2019 Mercado Libre
