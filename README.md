# Frontend - Recuperación de Contraseña

Aplicación Next.js 14 con diseño premium y glassmorphism para recuperación de contraseñas.

## 📦 Instalación

```bash
npm install
```

## ⚙️ Configuración

Edita el archivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_PLAYFAB_TITLE_ID=tu_title_id
```

## 🚀 Ejecución

### Desarrollo
```bash
npm run dev
```

La aplicación estará en: http://localhost:3000

### Producción
```bash
npm run build
npm start
```

## 📱 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Formulario para solicitar recuperación |
| `/reset/[token]` | Formulario para nueva contraseña |

## 🎨 Características

- Diseño glassmorphism premium
- Animaciones fluidas
- Indicador de fortaleza de contraseña
- Validación en tiempo real
- Responsive design
- Accesibilidad

## 🔗 Callback URL

Una vez desplegado, tu **Callback URL** para PlayFab será:

```
https://tu-dominio.com/reset/
```

PlayFab agregará el token automáticamente al final de la URL.
