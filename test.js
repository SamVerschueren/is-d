import test from 'ava';
import fn from './';

test('async', async t => {
	t.throws(fn(), 'Expected a file path');
	t.throws(fn('index.j'), Error);
	t.false(await fn('index.js'));
	t.true(await fn('fixture'));
});

test('sync', t => {
	t.throws(fn.sync, 'Expected a file path');
	t.throws(fn.sync.bind(fn, 'index.j'), Error);
	t.false(fn.sync('index.js'));
	t.true(fn.sync('fixture'));
});
