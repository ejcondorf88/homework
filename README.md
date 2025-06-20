# MiAppReactNative

Aplicación móvil desarrollada con **Expo**, **React Native**, **TypeScript** y **NativeWind (Tailwind CSS)**. Esta app implementa una pantalla Home moderna y responsiva, siguiendo buenas prácticas de UI/UX y Mobile First.

---

## 🚀 Características principales
- Expo Managed Workflow
- UI con utilidades de Tailwind CSS vía NativeWind
- Animaciones con react-native-reanimated
- Manejo de áreas seguras con react-native-safe-area-context
- Soporte para dark mode
- Accesibilidad y diseño responsivo

---

## 📱 Pantalla Home
- Tarjeta de anuncios
- Tarjeta de perfil
- Menú principal con animaciones
- Barra de navegación inferior

---

## 🛠️ Instalación y ejecución

1. **Clona el repositorio:**
   ```sh
   git clone <REPO_URL>
   cd MiAppReactNAtive
   ```
2. **Instala las dependencias:**
   ```sh
   npm install
   ```
3. **Inicia el proyecto en Expo:**
   ```sh
   npx expo start
   ```
   O usa los scripts:
   - `npm run android` — Ejecuta en Android
   - `npm run ios` — Ejecuta en iOS
   - `npm run web` — Ejecuta en Web

---

## 📦 Dependencias principales
- **expo**: 53.0.0
- **react-native**: 0.76.9
- **nativewind**: ^4.1.23
- **tailwindcss**: ^3.4.17
- **react-native-safe-area-context**: 4.12.0
- **react-native-reanimated**: (para animaciones)
- **typescript**: ^5.3.3

---

## 🗂️ Estructura del proyecto
```
MiAppReactNAtive/
├── App.tsx                # Componente principal (pantalla Home)
├── assets/                # Imágenes, íconos y recursos gráficos
├── babel.config.js        # Configuración de Babel (NativeWind)
├── nativewind-env.d.ts    # Tipos para NativeWind
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind CSS
├── app.json               # Configuración de Expo
└── ...
```

---

## 🎨 Estilos y utilidades
- Utiliza clases de Tailwind CSS en los componentes (`className`)
- Configuración de Babel para habilitar NativeWind
- Archivo de tipos `nativewind-env.d.ts` para soporte en TypeScript

---

## 🖼️ Recursos gráficos
- Icono: `assets/icon.png`
- Splash: `assets/splash-icon.png`
- Adaptive Icon: `assets/adaptive-icon.png`

---

## 📝 Notas
- Si ves errores de `className` en TypeScript, asegúrate de tener el archivo `nativewind-env.d.ts` y reinicia tu editor.
- Si tienes problemas con Babel, revisa que `babel.config.js` tenga la propiedad `plugins` dentro del objeto retornado.
- Para limpiar la caché de Expo: `npx expo start -c`

---

## 📚 Documentación y recursos
- [Expo Documentation](https://docs.expo.dev/)
- [NativeWind Docs](https://www.nativewind.dev/docs/getting-started/installation)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)

---

## 🧑‍💻 Autor
- Desarrollado por Sebastián Tituaña
