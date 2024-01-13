import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    assetsInclude: [
        '**/*.md',
    ],
    build: {
        lib: {
            entry: [path.resolve(__dirname, 'src/index.ts'), path.resolve(__dirname, 'src/imports.ts')],
            name: 'react-textgame-engine',
            fileName: (format, entryName) => `${entryName}.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        react(),
        dtsPlugin(),
        {
            name: 'raw-md-loader',
            enforce: 'pre',
            transform(code, id) {
                if (id.endsWith('.md')) {
                    const filePath = path.resolve(__dirname, id);
                    const content = fs.readFileSync(filePath, 'utf-8');
                    return `export default ${JSON.stringify(content)}`;
                }
            },
        },
    ],
    optimizeDeps: {
        include: ['@mui/material/Tooltip', '@emotion/styled', '@mui/material/Unstable_Grid2'],
    },
    resolve: {
        alias: {
            'app': path.resolve(__dirname, './src/app'),
            'imports': path.resolve(__dirname, './src/imports.ts'),
            'styles': path.resolve(__dirname, './src/styles'),
            'hooks': path.resolve(__dirname, './src/hooks'),
            'components': path.resolve(__dirname, './src/components'),
        },
    },
});
