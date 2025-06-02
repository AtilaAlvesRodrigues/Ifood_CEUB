const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css");
mix.js("resources/js/login.js", "public/js").postCss(
    "resources/css/login.css",
    "public/css",
    []
);
