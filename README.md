# ListJS
HTML에서 동적인 리스트를 쉽고 편리하게 만들 수 있는 모듈.

## Installation
HTML에 직접 코드를 추가하거나, `<script>` 태그로 연결하여 사용할 수 있습니다.
또는 웹페이지 콘솔창에 코드를 입력해 테스트용으로 사용할 수 있습니다.

## Initialization
`HTMLElement` 객체의 `list()` 메소드를 통해 리스트 초기화를 할 수 있습니다.
```js
const el = document.createElement('div');
document.body.appendChild(el);
el.list(); // 리스트로 초기화
```

----

## References

### defaultItemHTML
`defaultItemHTML` 프로퍼티를 통해 리스트 내 아이템의 기본적인 형태를 만들 수 있습니다.
`defaultItemHTML` 프로퍼티는 프로퍼티에 직접 접근하거나, `setDefaultItem()` 메소드를 이용하거나, `list()` 메소드로 초기화할 때 매개변수를 통해 변경할 수 있습니다.
```js
el.list('<label>WA SANS</label> <button>Submit Papyrus</button>');
el.defaultItemHTML = '<label>WA SANS</label> <button>Submit Papyrus</button>';
el.setDefaultItem('<label>WA SANS</label> <button>Submit Papyrus</button>');
```
또한 `defaultItemHTML` 프로퍼티 값에 `%0` 과 같은 형태의 서식 문자열을 추가하여 항목 추가 시에 값을 쉽게 설정할 수 있습니다. 이에 관해서는 `AddItem()` 메소드 부분에서 다룹니다.

### seperatorHTML
`seperatorHTML` 프로퍼티를 통해 항목 간 구분자를 추가할 수 있습니다.
이 프로퍼티도 `defaultItemHTML` 프로퍼티와 같은 방법으로 변경이 가능합니다.
```js
el.list(/* defaultItemHTML param */ '', '<hr>');
el.seperatorHTML = '<hr>';
el.setSeperator('<hr>');
```

### listItem
`listItem` 프로퍼티를 통해 리스트 내 항목들의 HTMLElement 객체에 접근할 수 있습니다.
단, listItem에 직접 접근하여 리스트를 제어하는 것보다 후술될 메소드를 이용하는 것을 권장합니다.

### addItem()
`addItem(props, ...args)` 메소드는 리스트의 가장 마지막에 항목을 하나 추가합니다.
처음 항목 이후부터는 `seperatorHTML`의 값이 항목 앞에 구분자로써 추가됩니다.
항목의 HTML 형태는 `defaultItemHTML`의 값을 갖게 됩니다.
첫 번째 매개변수로 오브젝트를 입력할 수 있습니다. 이때 오브젝트 파라메터값은 `listItem`에 저장되는 HTMLElement 객체의 프로퍼티로 추가됩니다.
```js
el.addItem();
el.addItem({ id: 'veryUniqueItem', class: 'list_item' });
```
두 번째 매개변수부터는 `defaultItemHTML`의 서식 문자열을 치환합니다.
서식 문자열은 `%(숫자)` 형식으로 이루어집니다. (예: `%0`, `%3`)
이때 이 서식 문자열은 해당 숫자 번째의 매개변수 값으로 치환됩니다.
```js
el.setDefaultItem('%0 <button>%1</button>');
el.addItem({}, 'wa', 'sans'); // 'wa <button>sans</button>
```
\* 서식 문자열 매개변수를 입력할 때 첫 번째 매개변수값을 지정하는 것을 유의하세요.

### getItem()
`getItem(index)` 메소드를 통해 리스트 내 항목의 HTMLElement 객체를 얻을 수 있습니다.
```js
el.addItem();
el.addItem();
el.getItem(0);
el.getItem(1);
```

### removeItem()
`removeItem(index)` 메소드를 통해 리스트 내 항목 하나를 삭제할 수 있습니다.
```js
el.addItem();
el.addItem();
el.removeItem(0);
el.removeItem(1);
// el.listItem 이 비어있음
```

### setDefaultItem()
`setDefaultItem(html)` 메소드를 통해 `defaultItemHTML` 프로퍼티를 설정할 수 있습니다.
파라메터를 지정하지 않으면 `'%0'` 로 설정됩니다.
```js
el.setDefaultItem(); // '%0'
el.setDefaultItem('%0 <button>%1</button>');
```

### setSeperator()
`setSeperator(html)` 메소드를 통해 `seperatorHTML` 프로퍼티를 설정할 수 있습니다.
파라메터를 지정하지 않으면 `'<hr>'` 로 설정됩니다.
```js
el.setSeperator(); // '<hr>'
el.setSeperator('<br><br><br>')
```