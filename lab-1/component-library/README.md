# Lab | Component Library with Typescript

Se crearon los tres componentes solicitados en el ejercicio.

## Button
### Props
- value: Genérico, requerido
- onClick: Función, opcional
- disabled: Booleano, opcional
### Ejemplos
```ts
<Button value="Botón"/>
<Button value={ 2024 }/>
<Button value={{ type: "object" }} disabled={ true }/>
<Button value="onclick" onClick={ () => console.log('hello world') }/>
```

## List
### Props
- items: Arreglo genérico, requerido
- filteredItems: Función, opcional
### Ejemplos
```ts
<List items={ ['hello', 'world'] } />
<List items={ [2024, 11, 20] }/>
<List items={ [{'hello': 'world'}] } />
<List
    items={[ {id: 1, name: 'Dog', age: 8}, {id: 2, name: 'Cat', age: 2}, {id: 3, name: 'Cow', age: 5} ]}
    filteredItems={(item) => item.age >= 5}
/>
```

## InputField
### Props
- value: String | Number, requerido
- placeholder: String, opcional
### Ejemplos
```ts
<InputField value="Hola"/>
<InputField value={ 123 } placeholder="Ingresa números"/>
<InputField value={ [1,2,3] } />
```
