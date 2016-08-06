require.config({
    baseUrl: '/',
    paths: {
        'angular': 'bower_components/angular/angular',
        'jquery': 'bower_components/jquery/dist/jquery',
        'require': 'bower_components/requirejs/require',
        'ui-router': 'bower_components/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        'angular': {
            deps: ['require', 'jquery'],
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular'],
            exports: 'ui-router'
        }
    },
    deps: ['startup']
});