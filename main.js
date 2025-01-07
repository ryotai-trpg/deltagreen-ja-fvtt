Hooks.on('init', () => {
    if (typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'deltagreen-ja',
            lang: 'ja',
            dir: 'compendium'
        });
    }
});
