# Defaults

If the value of any of the arguments (besides `price`) is `0`, that argument will be set to the default value as if that argument had been omitted. This is because in JS, `0` is falsy, and so negating it with `!` produces `true`. Therefore, any of conditionl expressions containing variables whose values are `0` will evaluate to `true`, and the associated clause will be entered.
