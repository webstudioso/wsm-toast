 # Webstudio Toast Module

This module adds alerts and notification capabilities to web apps built with `Webstudio`

 ![Webstudio Module Toast](https://github.com/webstudioso/wsm-toast/actions/workflows/production.yml/badge.svg)

### Testing and Building Module
```
npm i
npm run tests
npm run build
```

### Publish to NPMJS
```
npm publish
```

### Importing Dependency in Webstudio
Add it to the project, this is compatible with `grapesjs` as well.
```shell
npm i --save wsm-toast@latest
```
To import in the editor add the file and include it as a Plugin
```js
import PluginToast from "wsm-toast"

const editor = grapesjs.init({
    container: "#gjs",
    plugins: [
        PluginToast
    ],
})
```

### Dispatch Toast Event From Other Modules In Webstudio
```js
const event = new CustomEvent('onToast', { 
    detail: { 
        alertSeverity: "info", // info, success or error
        message: 'Who let the dogs out', 
        link: 'https://google.com', // Optional
        timeout: 5000 // Milliseconds
    }
})
 document.dispatchEvent(event)
```