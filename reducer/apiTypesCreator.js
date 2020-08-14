const apiTypescreator = type => ({
    [type]: {
        fetch: `${type}_fetch`,
        success: `${type}_success`,
        error: `${type}_error`,
        reset: `${type}_reset`
    }
})