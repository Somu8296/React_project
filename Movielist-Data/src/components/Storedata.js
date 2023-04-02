import { useState } from 'react';

function MyComponent() {
    const [inputData, setInputData] = useState('');

    function handleInput(e) {
        setInputData(e.target.value);
    }

    function storeData() {
        sessionStorage.setItem('myKey', inputData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        storeData();
    }

    const storedData = sessionStorage.getItem('myKey');
    console.log(storeData, 'storedData')

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputData} onChange={handleInput} />
                <button type="submit">Store data</button>
            </form>
            <p>Stored data: {storedData}</p>
        </div>
    );
}
export default MyComponent;