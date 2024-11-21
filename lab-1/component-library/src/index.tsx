import Button from "./components/Button";
import List from "./components/List";
import InputField from './components/InputField';

export default function App(): JSX.Element {
    return (
        <>
            Component: Button
            <Button value="Botón"/>
            <Button value={ 2024 }/>
            <Button value={{ type: "object" }} disabled={ true }/>
            <Button value="onclick" onClick={ () => console.log('hello world') }/>

            Component: List
            <List items={ ['hello', 'world'] } />
            <List items={ [2024, 11, 20] }/>
            <List items={ [{'hello': 'world'}] } />
            <List
                items={[ {id: 1, name: 'Dog', age: 8}, {id: 2, name: 'Cat', age: 2}, {id: 3, name: 'Cow', age: 5} ]}
                filteredItems={(item) => item.age >= 5}
            />
            <List items={[1,2,3]} />

            Component: InputField
            <InputField value="Hola"/>
            <InputField value={ 123 } placeholder="Ingresa números"/>
            <InputField value={ [1,2,3] } />
        </>
    );
}
