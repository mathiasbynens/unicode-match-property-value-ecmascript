const test = require('ava');
const matchPropertyValue = require('../index.js');

test('unicode-match-property-value-ecmascript', t => {
	t.deepEqual(
		matchPropertyValue('General_Category', 'L'),
		'Letter'
	);
	t.deepEqual(
		matchPropertyValue('General_Category', 'Lu'),
		'Uppercase_Letter'
	);
	t.deepEqual(
		matchPropertyValue('General_Category', 'Uppercase_Letter'),
		'Uppercase_Letter'
	);
	t.deepEqual(
		matchPropertyValue('Script', 'Xpeo'),
		'Old_Persian'
	);
	t.deepEqual(
		matchPropertyValue('Script', 'Old_Persian'),
		'Old_Persian'
	);
	t.deepEqual(
		matchPropertyValue('Script_Extensions', 'Xpeo'),
		'Old_Persian'
	);
	t.deepEqual(
		matchPropertyValue('Script_Extensions', 'Old_Persian'),
		'Old_Persian'
	);
	t.deepEqual(
		matchPropertyValue('Script_Extensions', 'Yezi'),
		'Yezidi'
	);
});
