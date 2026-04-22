import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/recuperacion-contraseña') {
        const url = request.nextUrl.clone();
        url.pathname = '/recuperacion-contrasena';
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/recuperacion-contraseña'],
};
