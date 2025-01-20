"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Star, ThumbsUp, Users } from "lucide-react";
import Image from "next/image";

const babysitters = [
  {
    id: 1,
    name: "Ana García",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop",
    rating: 4.8,
    reviews: 127,
    experience: "5 años",
    certifications: ["Primeros Auxilios", "Educación Infantil"],
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&fit=crop",
    rating: 4.9,
    reviews: 93,
    experience: "3 años",
    certifications: ["Psicología Infantil", "RCP"],
  },
  {
    id: 3,
    name: "María Sánchez",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&fit=crop",
    rating: 4.7,
    reviews: 156,
    experience: "7 años",
    certifications: ["Pedagogía", "Desarrollo Infantil"],
  },
];

const features = [
  {
    icon: Shield,
    title: "Verificación Completa",
    description: "Todos los cuidadores pasan por una rigurosa verificación de antecedentes",
  },
  {
    icon: Star,
    title: "Profesionales Certificados",
    description: "Personal con certificaciones en cuidado infantil y primeros auxilios",
  },
  {
    icon: ThumbsUp,
    title: "Sistema de Evaluación",
    description: "Calificaciones y reseñas verificadas de otras familias",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center mb-6">
          <Users className="h-12 w-12 text-blue-600" />
          <h1 className="text-4xl font-bold text-blue-900 ml-2">KidCare Connect</h1>
        </div>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Conectamos familias con los mejores cuidadores infantiles certificados, brindando tranquilidad y confianza en el cuidado de tus hijos.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Encuentra tu cuidador ideal
        </Button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Por qué elegir KidCare Connect?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Babysitters Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Cuidadores Destacados
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {babysitters.map((sitter) => (
            <Card key={sitter.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={sitter.image}
                    alt={sitter.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{sitter.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{sitter.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">Experiencia: {sitter.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {sitter.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-gray-500 text-sm">
                    <Heart className="h-4 w-4 mr-1" />
                    {sitter.reviews} reseñas verificadas
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}