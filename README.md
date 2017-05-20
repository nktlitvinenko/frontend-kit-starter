# Frontend starter kit

> Basic frontend environment with Angular2, TypeScript, Gulp, SASS, Bower

## Technologies

- Gulp
- Angular 4
- TypeScript
- SASS
- Bower

## Requirements and Use

### Requirements

*NodeJS* must be installed on your system and the below global node packages must be installed:

- gulp
- gulp-cli
- typings
- typescript
- ts-node

```bash
$ npm i -g gulp
$ npm i -g gulp-cli
$ npm i -g typings
$ npm i -g typescript
$ npm i -g ts-node
```

### Use

```bash
$ git clone https://github.com/nktlitvinenko/frontend-kit-starter.git
$ cd frontend-kit-starter
$ npm install
$ npm run start
```

## Project structure

```
.
├── /node_modules/              # Node modules dependencies and packages.
├── /bower_components/          # Bower dependencies and packages.
├── /typings/                   # Typings.
├── /build/                     # Compiled project.
|   ├── /debug/                 # Debug configuration.
|   └── /release/               # Production configuration.
├── /gulp/                      # Gulp files.
|   ├── /tasks/                 # Gulp tasks.
|   └── /config.js              # Gulp config (contains paths and etc).
├── /src/                       # Source files.
|   ├── /app/                   # Angular app.
|   |   ├── app.component.ts    # Main Angular component
|   |   ├── app.html            # Template for main Angular component
|   |   ├── app.module.ts       # Main Angular module
|   |   ├── app.routing.ts      # Routing configuration
|   |   └── main.ts             # Angular main file
|   ├── /assets/                # Assets folder.
|   |   ├── /fonts/             # Fonts.
|   |   ├── /images/            # Images non compressed.
|   |   └── /styles/            # SCSS or SASS style files.
|   ├── /index.html             # Main template file of application.
|   └── /system.config.js       # SystemJS configuration file
└── gulpfile.js                 # Gulp automatization file.
```

## License 

The code is available under the [MIT](https://github.com/nktlitvinenko/frontend-kit-starter/blob/master/LICENSE) license.

## Thanks
- Thanks to the user https://github.com/kolorobot I used his project https://github.com/kolorobot/angular2-typescript-gulp as a basis for my frontend environment