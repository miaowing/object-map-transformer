# Object-Map-Transformer

## Usage

```
npm install object-map-transformer --save
```

### Transform object to map

```
import transformer from 'object-map-transformer';

const object = {
    name: 'cat',
    age: 3,
    tags: ['animal', 'little']
}

const map = transformer.transformObjectToMap(object);

console.log(map); //{"name": "cat", "age": 3, "tags[0]": "animal", "tags[1]": "little"}
```

### Transform map to object
```
import transformer from 'object-map-transformer';

const map = {
    "name": "cat",
    "age": 3,
    "tags[0]": "animal",
    "tags[1]": "little",
    "action.canJump": true,
    "action.canFly": false
}

const object = transformer.transformMapToObject(map);

console.log(object); //{"name": "cat", "age": 3, "tags[0]": "animal", "tags[1]": "little", "action": {"canJump": true, "canFly": false}}
```