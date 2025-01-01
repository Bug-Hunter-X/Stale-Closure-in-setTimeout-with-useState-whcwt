```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting state directly within a setTimeout
    setTimeout(() => {
      setCount(count + 1); // This is the problematic line
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```