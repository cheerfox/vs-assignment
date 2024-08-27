### Task 3: Understanding

Please answer the following three questions in .txt file based on the javascript code below.

1. Simply describe what "function1" will do.
2. Can we stop what "function1" is doing? How?
3. How to optimize this snippet?

```js
import { call, put } from "redux-saga/effects";

let ctrl;

function* function1(action) {
    ctrl = new AbortController();
    const config = {
        method: "POST",
        url: "https://some-endpoint-url.com",
        data: action.payload,
        signal: ctrl.signal,
    };

    try {
        const { data } = yield call(/** a axios request with config */);

        yield put(/** reducer 1 */);
    } catch (e) {
        if (e.response) {
            const er = e.response;

            yield put(/** reducer 2 */);

            return;
        }
    } finally {
        if (ctrl.signal.aborted) {
            yield put(/** reducer 3 */);
        }
    }
}

function function2() {
    ctrl.abort();
}
```