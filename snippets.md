# Important Snippets

Some code snippets worth keeping around for copy/pasting.

```jsx
<button onClick={ () => 
  setPlayerData((playerData) => (
    {
      ...playerData, // existing playerData
      inventory: [...inventory, item], // existing inventory + new item
    }
  ))
}>
  Add {item} to inventory
</button>
```
```jsx
import pageBgSrc from "/img/locations/welcome.png";
<Layout bg={pageBgSrc}>
```


## This is an h2

* This
* is
* a
* list

1. So
2. is
3. this

You can _do some_ **typography stuff** if you ~~need to~~ want to.

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
