---
title: "AJAX and APIs"
permalink: /ajax-and-apis
excerpt: ""
last_modified_at: 2018-05-18T15:58:49-04:00
---

You can use any AJAX library you like with React. Some popular ones are [axios](https://github.com/axios/axios) and the browser built-in [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

You should populate data with AJAX calls in the `componentDidMount` lifecycle method. This is so you can use `setState` to update your component when the data is retrieved.

## Using AJAX Results to Set Local State

The component below demonstrates how to make an AJAX call in `componentDidMount` to populate local component state.

The example API returns a JSON object like this:

```
{
  items: [
    { id: 1, name: 'Apples', price: '$2' },
    { id: 2, name: 'Peaches', price: '$5' }
  ] 
}
```

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
```

## Cancellation

Note that if the component unmounts before an AJAX call is complete, you may see a warning like `cannot read property 'setState' of undefined`. If this is an issue you may want to keep track of inflight AJAX requests and cancel them in the `componentWillUnmount` lifecycle method.