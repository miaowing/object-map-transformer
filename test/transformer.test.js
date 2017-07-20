import test from 'ava';

import transformer from '../index';

test('Test transform object to map.', async t => {
    const object = {
        "name": "cat",
        "age": 3,
        "tags": ["animal", "little"],
        "action": {
            "canJump": true,
            "canFly": false
        }
    };

    const map = transformer.transformObjectToMap(object);

    t.is(map.name, 'cat');
    t.true(map['action.canJump']);
    t.is(map['tags[0]'], 'animal');
});

test('Test transform map to object.', async t => {
    const map = {
        "name": "cat",
        "age": 3,
        "tags[0]": "animal",
        "tags[1]": "little",
        "action.canJump": true,
        "action.canFly": false
    };

    const object = transformer.transformMapToObject(map);

    t.is(object.name, 'cat');
    t.is(object.tags[0], 'animal');
    t.true(object.action.canJump);
});