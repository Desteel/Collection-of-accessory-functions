let getMaxNumber = $numberArray => {
    let max = 0;

    for (let number of $numberArray) {
        if (number > max) {
            max = number;
        }
    }

    return max;
}

let getTag = $elem => $elem[0].nodeName.toLowerCase();

let getContent = $target => {
    let value,
        tag = getTag($target);

    if (tag === "input") {
        value = $target.val();
    } else if (tag === "img") {
        value = $target.attr("src");
    } else if (tag === "div" || tag === "span" || tag === "label" || tag === "td") {
        value = $target.text();
    }
    return value;
}

let callbackInit = $callback => {
    if ($callback && typeof($callback) === "function") {
        $callback();
    }
}

let eventInit = ($event, $elem, $function) => {
    $elem.on($event, function() {
        callbackInit($function);
    });
}

export { getMaxNumber, getContent, callbackInit, eventInit };
