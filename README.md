# React Blog

A blog made with react and tailwindcss, bootstrapped with bun.

## Getting Started

### Install Bun

```sh
curl https://bun.sh/install | bash
```

### Development

1. Install dependencies

```sh
bun install
```

2. Run tailwindcss

```sh
npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch
```

3. Run the development server.

```sh
bun run start
```

4. Open http://localhost:3000 with your browser to see the result.

### Deployment

1. Change `mode` to `production` in [webpack.config.js](webpack.config.js)
2. Change config in [config.json](src/Files/config.json)

3. Add markdown files in Files folder. (e.g. [test.md](src/Files/test.md))

4. Build the project
   ```sh
   bun run build
   ```

Host public folder as a single page application
