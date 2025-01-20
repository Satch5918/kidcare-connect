import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Users } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-900">KidCare Connect</span>
            </div>
            <p className="text-gray-600 mb-4">
              Conectando familias con cuidadores de confianza desde 2024.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Cuidado Regular
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Cuidado Ocasional
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Cuidado de Emergencia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Actividades Educativas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Mallorca, Islas Baleares</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+34 900 000 000</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>info@kidcareconnect.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-600">
            © 2024 KidCare Connect. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}