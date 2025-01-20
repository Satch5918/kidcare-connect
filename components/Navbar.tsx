"use client";

import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-900">KidCare Connect</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cuidadores" className="text-gray-600 hover:text-blue-600">
              Cuidadores
            </Link>
            <Link href="/servicios" className="text-gray-600 hover:text-blue-600">
              Servicios
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-600 hover:text-blue-600">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-600 hover:text-blue-600">
              Contacto
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost">Iniciar Sesión</Button>
            <Button>Registrarse</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}