## Answers

- [x] Why would you use class component over function components (removing hooks from the question)?

Class components have been used in React much longer then functional ones thus legacy code and third party legacy libraries still may rely on them. Beyond that class components do have life cycle methods that can be hooked into easily thus making some patterns easier to create in class components compared to functional ones.

- [x] Name three lifecycle methods and their purposes.

componentDidMount - Called after a component is mounted, used for setup that requires the component already mounted like setting up DOM functions or anything that would fail if the component didn't exist yet.
componentDidUpdate - Called after a prop or a state is changed or a rerender is needed, useful when you have actions that occur whenever a change occurs.
componentWillUnmount - Called when a component is about to unmount, used for destroying event listeners, unsubscribing to Observables, etc.

- [x] What is the purpose of a custom hook?

Custom hooks are used to extend the functionality of React Hooks. You can encapsulate functionality like saving to Local State, effects on change, or anything that is stateful and reuse and test that functionality outside of the a component itself.

- [x] Why is it important to test our apps?

Testing applications prevents many pitfalls down the road such as bugs introduced from ne features or integration changes or simply another coder coming in and working on your code. Automated testing is the life blood of collaboration and is used greatly by large teams to work together and not step on each other's toes.
