---
sidebar_position: 1
---

# קצת על הפרויקט

# Web Development Topics
<div dir="rtl">

הנושאים הבאים הם הדברים שממש צריך לדעת לקראת הפיתוח, לא כל הנושאים הכרחיים, ובגדול אפשר ללמוד תוך כדי הפיתוח, אבל כדאי לפחות לראות את הרעיון הבסיסי. 

הנסיון מלמד שרוב העבודה הולכת על ניהול States, וספציפית, על סטייט מנגמנט  שיש לו אינטראקציה עם דאטה, זה תמיד מסובך יותר ממה שזה נראה כי זה כולל כמה שלבים. זו הסיבה שהגדשתי נושאים שקשורים לזה.
אחד הדברים שחשוב מאוד לזכור לפני שמתחילים עם ריאקט זה שבריאקט **אף פעם אי אפשר לשנות דאטה, אפשר רק ליצור דאטה חדש**. המשמעות היא שסינטקס מסורתי של ג'אווהסקריפט כמו "array.push", או var x = "something" לא יעבוד כאן.
חשוב לזכור את זה לפני שמתחילים, כי זה יהיה מסובך יותר כשמתחילים להשתמש בסטייסט , ולכן במיוחד חשוב להכיר את קטע  (D)
לא תמיד כתבתי את שם הנושא, לפעמים הסינטקס עצמו הוא הנושא אז ציינתי אותו כמו שהוא.
אני מקווה בהמשך להוסיף לזה דוגמאות ואולי גם Cheetsheet  שיאפשר לרפרנס בקלות.

</div>

## (A)  (JS)

### (B) Arrow Functions
- Arrow Function Syntax: `"=>"`, e.g., `(item) => item.index`
- Common Methods Using Arrow Functions:
    - `array.map((item) => item.id)` **(חשוב)**
    - `array.filter((item) => item.id == id)` **(חשוב)**
    - `array.reduce((item) => item.id)`
    - `array.find((item) => item.id)` **(מומלץ)**
    - `array.sort()`
    - `json.stringify()` **(חשוב)**
    - Error Handling: `try`, `catch()` 
    - Asynchronous Handling: `async`, `await()` `**(מומלץ)**
    - Data Fetching: `fetch()`**(מומלץ)**

### (C) Object and Array Operations
- Checking Object Keys: `Object.keys(obj).every((key) => obj[key])`
- Destructuring:
    - Object Destructuring: `const {prop1, prop2} = props` **(חשוב)**
    - Array Destructuring: `const [prop1, prop2] = props` **(חשוב)**

### (D) Spread Operator and State Management
- Spread Operator Usage: `const newArray = [...array1, ...array2, array3]` **(מאוד חשוב)**
- React State Update Examples:
    - `(e) => { const obj = { value: e.target.value }; SetValue([...values, newValues]); }` **(חשוב)**
    - `(e) => { SetValue({ ...values, NewValue: e.target.value }); }` **(חשוב)**
    - `() => SetValues({ ...values, toggle != values.toggle });`

## ES6/ES7

### (E) - Logical Operators: **(מאוד חשוב)**
    - Optional Chaining: `object?.property`
    - Ternary Operator: `condition ? ResultReturnIfTrue : ReturnIfFalse`
    - AND Operator: `condition && ResultReturnIfTrue`
    - OR Operator: `condition || ResultReturnIfTrue`
    - Nullish Coalescing Operator: `object ??= value`

### (F) Equality Operators **(מאוד חשוב)**
- `==` Operator: `1 == '1'` (true)
- `===` Operator: `1 === '1'` (false)
- `!=` Operator: `1 != '1'` (false)
- `!==` Operator: `1 !== '1'` (true)

## (G) Regular Expressions (regex) **(מומלץ)**
- Simple Regex: `(\d+)`, `(\w+)`, `(\s+)` `
- Complex Regex:
- Lookahead: `x(?=y)`, matches 'x' only if 'x' is followed by 'y'. 
- Lookbehind: `(?<=y)x`, matches 'x' only if 'x' is preceded by 'y'.
- Negative Lookahead: `x(?!y)`, matches 'x' only if 'x' is not followed by 'y'. 
- Negative Lookbehind: `(?<!y)x`, matches 'x' only if 'x' is not preceded by 'y'. 

## Node Elements

### (H) Basic HTML Elements
- `<html>`, `<head>`, `<body>`
- `<div>`, `<span>`, `<p>`, `<h1>`
- `<ul>`, `<li>`

### (I) Form Elements
- `<input>`: Types and Attributes (e.g., `text`, `password`, `email`, `checkbox`, `radio`, `placeholder`, `value`, `checked`, `onChange`, `onClick`, `onSubmit`) **(חשוב)**
- `<button>`
- `<select>`
- `<option>`: `label`, `value`
- `<form>`: `name`, `action`, `onSubmit` 

## React

### (J) Core Concepts
- State Management: `useState` - `const [value, setValue] = useState('')` **(מאוד חשוב)***
- Use Effects: `UseEffect - useEffect(() => {}, [])` 
- Event Handlers: `onChange`, `onClick`, `onSubmit`
- Routing: `react-router` - `BrowserRouter`, `Route`, `Link` 
- Form Handling: `const handleSubmit = () => setValue(e.target.value)`  **(מאוד חשוב)**
- Prop Management
- Context: `useContext`
- Advanced Hooks: `useReducer`, `useCallback`, `useMemo`, `useRef`
- Modular Styling: `css modules (className={styles.Container})`

## Next.js

### (K) Core Features
- Server and Client Side Handling: `Use Server`, `Use Client`
- Routing: `useParams`, `useSearchParams` **(מומלץ)**
- API Routes: `GET`, `POST`, `PUT`, `DELETE`
- Form Handling: `FormAction`, `const { pending } = useFormStatus()`, `const input = formData.get("name");`, `useFormState`

## TailwindCSS

### (L) Styling Concepts
- Layout: `flex`, `grid` (col, row, gap, justify, align) **(מאוד חשוב)**
- Text and Fonts: `text`, `font`, `color` **(חשוב)**
- Borders and Shadows: `border`, `shadow` **(חשוב)**
- Background: `bg-color` **(חשוב)**
- Interactive States: `hover`, `active` **(חשוב)**
- Transitions: `transition` 



---

