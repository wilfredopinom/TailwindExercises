# clona el repositorio

https://github.com/kant003/tailwindExercises.git

# instala las dependencias

```
npm install
```

# Creando el proyecto en con vite

```
npm create vite@latest
```

# Añadiendo tailwind a vite

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

# Configurando tailwind correctamente

Añade al fichero **tailwind.config.cjs**
```
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
```

# Añade las directivas de tailwind a tus hojas de estilo.

Añade al fichero **style.css**

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


# Arrancar la app

```
npm run dev
```